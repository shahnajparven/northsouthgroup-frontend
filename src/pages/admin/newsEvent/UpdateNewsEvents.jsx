import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";
import { FaSpinner } from "react-icons/fa"; 

const UpdateNewsEvents = () => {
  const { id } = useParams();
 const navigate = useNavigate();
  const { newsEvents, updateNewsEvents,isLoading } = useNewsEventsStore();

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const [images, setImages] = useState([]);

  /* ================= FETCH PROJECT ================= */
   useEffect(() => {
    const newsEvent = newsEvents.find((p) => p._id === id);
    if (newsEvent) {
      setTitle(newsEvent.title);
      setDescription(newsEvent.description);
      setLoading(false);
    } else {
      // If not found in store, optionally fetch from API or show error
      toast.error("News Events not found in store");
      setLoading(false);
    }
  }, [id, newsEvents]);
  /* ================= UPDATE ================= */
   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    

    images.forEach((img) => formData.append("image", img));
  
    try {
      await updateNewsEvents(id, formData); // Zustand store handles API & state
      toast.success("News Events updated successfully!");
      navigate("/adminDashboard/viewNewsEvents");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update News Events");
    }
  };

  if (loading) return <p className="p-6">Loading news Event...</p>;

  /* ================= UI ================= */
  return (
    <div className="bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 space-y-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center underline">
          Update News Events
        </h2>

       
      
        <div className="grid md:grid-cols-2 gap-4">
           {/* Title */}
        <div>
          <label className="font-semibold">News Events Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

          <div>
            <label className="font-semibold">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          
        </div>

        {/* Images (Optional on Update) */}
        <div className="grid md:grid-cols-2 gap-4">
             <div className="space-y-1 md:col-span-2">
             <label className="font-semibold">Project Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages([...e.target.files])}
          />
          </div>
           
        </div>

      
        <div className="flex justify-center">
          
          <button
  type="submit"
  className={`px-6 py-2 rounded flex items-center gap-2
    ${isLoading 
      ? "bg-gray-400 cursor-not-allowed" // disabled look
      : "bg-blue-600 hover:bg-blue-700 text-white"}`
  }
  disabled={isLoading} // actually disables click
>
  {isLoading && <FaSpinner className="animate-spin" />}
  {isLoading ? "Updating..." : "Update"}
</button>
        </div>

      </form>
    </div>
  );
};

export default UpdateNewsEvents;
