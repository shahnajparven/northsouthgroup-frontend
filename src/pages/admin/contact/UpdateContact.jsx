import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactStore } from "../../../store/contact/contactStore";
import { FaSpinner } from "react-icons/fa"; 

const UpdateContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts,isLoading, updateContacts } = useContactStore();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Load contact from store
  useEffect(() => {
    const contact = contacts.find((c) => c._id === id);
    if (contact) {
      setName(contact.name || "");
      setNumber(contact.number || "");
      setAddress(contact.address || "");
      setEmail(contact.email || "");
      setMessage(contact.message || "");
    
    } else {
      toast.error("Contact not found in store");
     
    }
  }, [id, contacts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, number, address, email, message }; // JSON payload

    try {
      console.log(payload)
      await updateContacts(id, payload); // send JSON to backend
      toast.success("Contact updated successfully!");
      navigate("/adminDashboard/viewContact");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update contact");
    }
  };

  if (isLoading) return <p className="p-6">Loading contact...</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-10">
      <form className="p-6 space-y-6 w-full bg-white rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center underline">Update Contact</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="font-semibold">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 w-full rounded"
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

export default UpdateContact;
