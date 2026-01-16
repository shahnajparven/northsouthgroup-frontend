import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";
import { FaSpinner } from "react-icons/fa"; 
import { usePartnerStore } from "../../../store/partners/partnersStore";

const CreatePartners = () => {
   const navigate = useNavigate();
  const { addPartners,loadPartners,isLoading  } = usePartnerStore();
 
  const [partnersImage, setPartnersImage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append multiple images
    partnersImage.forEach((img) => formData.append("partnersImage", img));

    try {
     
      await addPartners(formData); // Zustand store handles API call & toast
      toast.success("News & Event added successfully!");
  
  // Reload the project list in store
  await loadPartners(); 
  navigate("/adminDashboard/viewPartners"); // go to project list
    } catch (err) {

      toast.error(err || "failed");
    }
    

  };


  return (
    <div className="">
   <form onSubmit={handleSubmit} className="p-4 space-y-6">
<h2 className="w-full flex justify-center items-center text-3xl font-bold underline">Create partners</h2>
  {/* Project Title */}
  <div className="w-full flex justify-center items-center">
 
    
    <div className="space-y-1">
      <label className="font-semibold">Partners Image</label>
      <input
        type="file"
        multiple
        onChange={(e) => setPartnersImage([...e.target.files])}
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

export default CreatePartners;
