import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";

const NewsEventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { newsEvents, loadNewsEvents, isLoading } = useNewsEventsStore();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await loadNewsEvents();
    };
    fetchData();
  }, [loadNewsEvents]);

  useEffect(() => {
    if (Array.isArray(newsEvents)) {
      const found = newsEvents.find(item => item._id === id);
      setEvent(found);
    }
  }, [newsEvents, id]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!event) return <p className="text-center mt-10">No News/Event Found</p>;

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">

        <button
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">{event.title}</h1>

        {/* Optional Date */}
        {event?.createdAt && (
          <p className="text-gray-500 mb-4">
            {new Date(event.createdAt).toLocaleDateString()}
          </p>
        )}

        {/* Image (if exists) */}
        {event?.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-72 object-cover rounded mb-6"
          />
        )}

        {/* Description */}
        <p className="text-gray-700 leading-7 whitespace-pre-line">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default NewsEventDetails;
