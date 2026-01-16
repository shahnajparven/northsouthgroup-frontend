import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";
import { FaSpinner } from "react-icons/fa"; 

const CreateNewsEvent = () => {
   const navigate = useNavigate();
  const { addNewsEvent,loadNewsEvents,isLoading  } = useNewsEventsStore();
  // const [loading, setLoading] = useState(false); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    // Append multiple images
    images.forEach((img) => formData.append("image", img));

    try {
     
      await addNewsEvent(formData); // Zustand store handles API call & toast
      toast.success("News & Event added successfully!");
  
  // Reload the project list in store
  await loadNewsEvents(); 
  navigate("/adminDashboard/viewNewsEvents"); // go to project list
    } catch (err) {

      toast.error(err || "failed");
    }
    

  };


  return (
    <div className="bg-gray-100">
   <form onSubmit={handleSubmit} className="p-4 space-y-6">
<h2 className="w-full flex justify-center items-center text-3xl font-bold underline">Create News & Event</h2>
  {/* Project Title */}
  
      {/* First Row → description + Status */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div><label className="font-semibold">Project Title</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border p-2 w-full rounded"
      required
    /></div>
    {/* description */}
    <div>
      <label className="font-semibold">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
    
  </div>




  {/* Images */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <div className="space-y-1">
      <label className="font-semibold">Project Images</label>
      <input
        type="file"
        multiple
        onChange={(e) => setImages([...e.target.files])}
        className="border p-2 w-full"
      />
    </div>

  </div>
<div className="w-full flex justify-center items-center">
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
  {isLoading ? "Creating..." : "Create"}
</button>

  </div>
</form>
</div>
  );
};

export default CreateNewsEvent;
