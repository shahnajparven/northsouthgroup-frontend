import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { useReviewStore } from "../../../store/review/reviewStore";

const CreateReview = () => {
  const navigate = useNavigate();
  const { addReviews, loadReviews, isLoading } = useReviewStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [reviewVideo, setReviewVideo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("reviewVideo", reviewVideo);
    try {
      await addReviews(formData);
      toast.success("Review added successfully");

      await loadReviews();
      navigate("/adminDashboard/viewReview");
    } catch (err) {
      toast.error(err || "Failed to create review");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded  w-full space-y-4"
      >
        <h2 className="text-3xl font-bold text-center underline">
          Create Review
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

        {/* Name */}
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
          <label className="font-semibold">Review Video (URL )</label>
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
            className={`px-6 py-2 rounded flex items-center gap-2
              ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            {isLoading && <FaSpinner className="animate-spin" />}
            {isLoading ? "Creating..." : "Create Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;
