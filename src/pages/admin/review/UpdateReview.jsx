import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { useReviewStore } from "../../../store/review/reviewStore";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { reviews, updateReviews, loadReviews, isLoading } = useReviewStore();

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [reviewVideo, setReviewVideo] = useState("");

  // Fetch review details from store
  useEffect(() => {
    const review = reviews.find((r) => r._id === id);
    if (review) {
      setTitle(review.title || "");
      setDescription(review.description || "");
      setName(review.name || "");
      setDesignation(review.designation || "");
      setReviewVideo(review.reviewVideo || "");
      setLoading(false);
    } else {
      // If not found in store, optionally fetch all reviews
      const fetchData = async () => {
        await loadReviews();
        const found = reviews.find((r) => r._id === id);
        if (found) {
          setTitle(found.title || "");
          setDescription(found.description || "");
          setName(found.name || "");
          setDesignation(found.designation || "");
          setReviewVideo(found.reviewVideo || "");
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [id, reviews, loadReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("designation", designation);

   formData.append("reviewVideo", reviewVideo);

    try {
      await updateReviews(id, formData);
      toast.success("Review updated successfully!");
      navigate("/adminDashboard/viewReview");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update review");
    }
  };

  if (loading) return <p className="p-6 text-center">Loading review...</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-6 rounded w-full max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-center underline">
          Update Review
        </h2>

        {/* Title */}
        <div>
          <label className="font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Reviewer Name */}
        <div>
          <label className="font-semibold">Reviewer Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="font-semibold">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Review Video */}
        <div>
          <label className="font-semibold">Review Video (optional)</label>
          <input
            type="text"
            value={reviewVideo}
            onChange={(e) => setReviewVideo(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded flex items-center gap-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isLoading && <FaSpinner className="animate-spin" />}
            {isLoading ? "Updating..." : "Update Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
