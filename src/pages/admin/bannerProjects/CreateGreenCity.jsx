
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGreenCityStore } from "../../../store/greenCity/greenCityStore";
import { FaSpinner } from "react-icons/fa"; 

const UpdateGreenCity = () => {
  const navigate = useNavigate();
  const { addGreenCity, loadGreenCity,isLoading } = useGreenCityStore();

  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Must match backend field name
    if (video) {
      formData.append("greenCityVideo", video);
    }

    try {
       
      await addGreenCity(formData);
      toast.success("Green City Video uploaded successfully!");

      await loadGreenCity();
      navigate("/adminDashboard/viewGreenCity");
    } catch (err) {
      toast.error(err?.message || "Upload failed");
    }
    
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <h2 className="w-full flex justify-center items-center text-3xl font-bold underline">
          Upload Green City Video
        </h2>

        <div className="space-y-1">
          <label className="font-semibold">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="border p-2 w-full"
          />
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

export default UpdateGreenCity;

