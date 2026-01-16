import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { usePartnerStore } from "../../../store/partners/partnersStore";

const UpdatePartners = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { partners, updatePartners, loadPartners, isLoading } = usePartnerStore();

  const [loading, setLoading] = useState(true);
  const [partnersImage, setPartnersImage] = useState([]); // new files
  const [oldImages, setOldImages] = useState([]); // existing images

  // Load partner details
  useEffect(() => {
    const partner = partners.find((p) => p._id === id);

    if (partner) {
      setOldImages(Array.isArray(partner.partnersImage) ? partner.partnersImage : []);
      setLoading(false);
    } else {
      const fetchData = async () => {
        await loadPartners();
        const found = partners.find((p) => p._id === id);
        if (found) setOldImages(Array.isArray(found.partnersImage) ? found.partnersImage : []);
        setLoading(false);
      };
      fetchData();
    }
  }, [id, partners, loadPartners]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append new images (if any)
    partnersImage.forEach((img) => formData.append("partnersImage", img));

    try {
      await updatePartners(id, formData);
      toast.success("Partners updated successfully!");
      navigate("/adminDashboard/viewPartners");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update partners");
    }
  };

  if (loading) return <p className="p-6 text-center">Loading partner details...</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-10">
      <form onSubmit={handleSubmit} className="p-6 rounded w-full max-w-3xl space-y-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold text-center underline">Update Partners</h2>

        {/* Images Upload */}
        <div className="space-y-2">
          <label className="font-semibold">Partners Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setPartnersImage([...e.target.files])}
            className="border p-2 w-full"
          />
        </div>

        {/* Show existing images */}
        {oldImages.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {oldImages.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Partner ${idx}`}
                className="w-full h-32 object-cover rounded border"
              />
            ))}
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-center mt-6">
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
            {isLoading ? "Updating..." : "Update Partners"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePartners;
