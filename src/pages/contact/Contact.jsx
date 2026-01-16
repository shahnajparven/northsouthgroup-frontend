// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
// import './contact.css';
// import { useContactStore } from "../../store/contact/contactStore";

// export default function Contact() {
//   const { addContact, isLoading } = useContactStore();
  
//     const [name, setName] = useState("");
//     const [number, setNumber] = useState("");
//     const [address, setAddress] = useState("");
//     const [email, setEmail] = useState("");
//    const [message, setMessage] = useState("");
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const payload = { name, number, address, email, message }; // plain JSON
  
//     try {
//       await addContact(payload); // send JSON
//       toast.success("Contact added successfully");
//     } catch (err) {
//       toast.error(err || "Failed to create contact");
//     }
//   };
  
  
//   return (
//     <section id="contact" className="text-white">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-16 py-18">
        
        

//         {/* Contact Form */}
//         <div data-aos="fade-up" className="w-full">
//           <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
//           <p className="text-gray-400 mb-8 text-center">We're open for any suggestion or just to have a chat</p>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
//               required
//             />
//             <input
//               type="text"
//               name="number"
//               placeholder="Number"
//               value={formData.number}
//               onChange={handleChange}
//               className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
//               required
//             />
//            <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                  className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
//               />
//             <textarea
//               name="message"
//               placeholder="Drop your message here"
//               rows={6}
//               value={formData.message}
//               onChange={handleChange}
//               className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 md:col-span-2 w-full"
//               required
//             />
            
//           </form>
//           <div className="w-full flex justify-center items-center py-8">
//             <button
//               type="submit"
//               className="slide-hover bg-white hover:bg-green-600 text-green-700 font-semibold py-3 px-16 transition transform hover:scale-105 md:col-span-2"
//             >
//              <span>
//                Send
//              </span>
//             </button>
//             </div>
//         </div>

//         {/* Contact Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-300">
//           <div className="flex flex-col items-center gap-2">
//             <FaMapMarkerAlt className="text-white text-3xl" />
//             <h4 className="font-semibold">Corporate Office</h4>
//             <p className="text-sm">
//               16 Tower Hamlet Level-07, 08 & 11th<br />
//               Kamal Ataturk Avenue, Banani, Dhaka-1213
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <FaMapMarkerAlt className="text-white text-3xl" />
//             <h4 className="font-semibold">Dubai Office</h4>
//             <p className="text-sm">
//               House-47, Street-12, Hamriya Deira, Dubai, POBox: 83129
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <FaPhoneAlt className="text-white text-3xl" />
//             <h4 className="font-semibold">Phone</h4>
//             <p className="text-sm">
//               +88 02222 274792<br />
//               +88 01894 801923<br />
//               +88 09642 801925
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <FaEnvelope className="text-white text-3xl" />
//             <h4 className="font-semibold">Email</h4>
//             <p className="text-sm">
//               northsouthgroupbd@gmail.com<br />
//               info@northsouthgroup.com
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-2 sm:col-span-2 md:col-span-4">
//             <FaGlobe className="text-green-500 text-3xl" />
//             <h4 className="font-semibold">Website</h4>
//             <p className="text-sm">
//               www.northsouthgroup.com<br />
//               www.northsouthgroupbd.com
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContactStore } from "../../store/contact/contactStore";
import './contact.css';

export default function Contact() {
  const { addContact, isLoading } = useContactStore();

  // Individual state variables
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, number, address, email, message }; // send individual states as JSON

    try {
      await addContact(payload);
      toast.success("Contact added successfully!");

      // Clear individual fields after submit
      setName("");
      setNumber("");
      setAddress("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create contact");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16 py-18">
        {/* Contact Form */}
        <div data-aos="fade-up" className="w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-400 mb-8 text-center">
            We're open for any suggestion or just to have a chat
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Drop your message here"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded border border-gray-300 focus:outline-none focus:border-green-500 md:col-span-2 w-full"
              required
            />
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="slide-hover bg-white hover:bg-green-600 text-green-700 font-semibold py-3 px-16 transition transform hover:scale-105"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-300">
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-white text-3xl" />
            <h4 className="font-semibold">Corporate Office</h4>
            <p className="text-sm">
              16 Tower Hamlet Level-07, 08 & 11th<br />
              Kamal Ataturk Avenue, Banani, Dhaka-1213
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-white text-3xl" />
            <h4 className="font-semibold">Dubai Office</h4>
            <p className="text-sm">
              House-47, Street-12, Hamriya Deira, Dubai, POBox: 83129
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-white text-3xl" />
            <h4 className="font-semibold">Phone</h4>
            <p className="text-sm">
              +88 02222 274792<br />
              +88 01894 801923<br />
              +88 09642 801925
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-white text-3xl" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-sm">
              northsouthgroupbd@gmail.com<br />
              info@northsouthgroup.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:col-span-2 md:col-span-4">
            <FaGlobe className="text-green-500 text-3xl" />
            <h4 className="font-semibold">Website</h4>
            <p className="text-sm">
              www.northsouthgroup.com<br />
              www.northsouthgroupbd.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
