import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContactStore } from "../../../store/contact/contactStore";
import { FaArrowLeft } from "react-icons/fa";

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { contacts, loadContacts, isLoading } = useContactStore();
  const [contact, setContact] = useState(null);

  // Load contacts from store
  useEffect(() => {
    const fetchData = async () => {
      await loadContacts();
    };
    fetchData();
  }, [loadContacts]);

  // Find contact by id
  useEffect(() => {
    if (Array.isArray(contacts)) {
      const found = contacts.find((c) => c._id === id);
      setContact(found || null);
    }
  }, [contacts, id]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!contact) return <p className="text-center mt-10">No Contact Found</p>;

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

        {/* Contact Name */}
        <h1 className="text-3xl font-bold text-center mb-2">{contact.name}</h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold">Phone:</p>
            <p>{contact.number || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{contact.email || "N/A"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold">Address:</p>
            <p>{contact.address || "N/A"}</p>
          </div>
        </div>

        {/* Message */}
        {contact.message && (
          <div>
            <p className="font-semibold">Message:</p>
            <p className="text-gray-700 leading-7 whitespace-pre-line">
              {contact.message}
            </p>
          </div>
        )}

        {/* Created Date */}
        {contact.createdAt && (
          <p className="text-gray-500 text-right text-sm">
            Submitted on {new Date(contact.createdAt).toLocaleDateString()} at{" "}
            {new Date(contact.createdAt).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
