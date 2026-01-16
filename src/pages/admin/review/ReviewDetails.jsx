import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReviewStore } from "../../../store/review/reviewStore";
import { FaArrowLeft } from "react-icons/fa";

const ReviewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { reviews, loadReviews, isLoading } = useReviewStore();
  const [review, setReview] = useState(null);

  // Load reviews
  useEffect(() => {
    const fetchData = async () => {
      await loadReviews();
    };
    fetchData();
  }, [loadReviews]);

  // Find review by id
  useEffect(() => {
    if (Array.isArray(reviews)) {
      const found = reviews.find((r) => r._id === id);
      setReview(found || null);
    }
  }, [reviews, id]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!review) return <p className="text-center mt-10">No Review Found</p>;

  return (
    <div className="w-full flex justify-center py-10 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">

        {/* Back Button */}
        <button
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        {/* Review Title */}
        <h1 className="text-3xl font-bold text-center mb-2">{review.title}</h1>

        {/* Reviewer Info */}
        <div className="text-center text-gray-700 space-y-1">
          <p className="font-semibold">{review.name}</p>
          {review.designation && <p className="text-gray-500">{review.designation}</p>}
        </div>

        {/* Description */}
        {review.description && (
          <div className="mt-4">
            <h2 className="font-semibold mb-1">Description:</h2>
            <p className="text-gray-700 leading-7 whitespace-pre-line">{review.description}</p>
          </div>
        )}

        {/* Review Video */}
        {review.reviewVideo && (
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Review Video:</h2>
            {typeof review.reviewVideo === "string" ? (
              <video
                src={review.reviewVideo}
                controls
                className="w-full rounded"
              />
            ) : (
              <p className="text-gray-500">No video available</p>
            )}
          </div>
        )}

        {/* Submission Date */}
        {review.createdAt && (
          <p className="text-gray-500 text-right text-sm mt-4">
            Submitted on {new Date(review.createdAt).toLocaleDateString()} at{" "}
            {new Date(review.createdAt).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewDetails;
