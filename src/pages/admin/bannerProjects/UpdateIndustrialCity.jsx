

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useIndustrialCityStore } from "../../../store/industrialCity/industrialCityStore";
import { FaSpinner } from "react-icons/fa"; 
const UpdateIndustrialCity = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get industrialCity ID from route
  const {  updateIndustrialCity,isLoading } = useIndustrialCityStore();

 const [video, setVideo] = useState(null); // new video file
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     const formData = new FormData();
     if (video) {
       formData.append("industrialCityVideo", video);
     }
 
     try {
       await updateIndustrialCity(id, formData);
       toast.success("Industrial City Video updated successfully!");
       navigate("/adminDashboard/viewIndustrialCity");
     } catch (err) {
       toast.error(err?.message || "Update failed");
     }
   };
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold underline text-center mb-6">
        Update Industrial City Video
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <label className="font-semibold">Upload New Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="border p-2 w-full"
          />
        </div>

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
      </form>
    </div>
  );
};

export default UpdateIndustrialCity;
