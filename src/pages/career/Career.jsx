import { useEffect, useRef, useState } from "react";
import career1 from "../../assets/images/career1.jpg";
import { IoCloseOutline } from "react-icons/io5";
import useReveal from "../../components/useReveal";

const amenitiesData = [
  {
    category: "Equal Employment Opportunity",
    items: [
      "North South Group offers a wide range of equal employment opportunities for undergraduate and graduate students...",
    ],
  },
  {
    category: "Excellent Work Environment",
    items: [
      "North South Group offers an excellent work environment in terms of workplace culture...",
    ],
  },
  {
    category: "Extensive Training and Skill Development",
    items: [
      "North South Group offers extensive training that helps in skill development for employees...",
    ],
  },
  {
    category: "Professional and Dynamic Corporate Culture",
    items: [
      "North South Group offers a professional and positive dynamic corporate culture...",
    ],
  },
  {
    category: "Opportunity to Work With Versatile Team",
    items: [
      "Working with a multi-culture team brings opportunities to learn new skills...",
    ],
  },
  {
    category: "Rapid Career Progress",
    items: [
      "North South Group offers the best career growth one can have...",
    ],
  },
];

const Career = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

const ref = useReveal();
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={career1}
          alt="Career Banner"
          className="w-full h-64 md:h-96 lg:h-[100vh] object-cover"
        />

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
            Career
          </h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-stretch gap-10 px-6 lg:px-12 mt-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1
            ref={ref}
            className={`slide-title ${className} mb-6 text-[26px] md:text-[30px] text-[#212529] text-center lg:text-left`}
          >
            WHY YOU SHOULD TRUST NORTH SOUTH GROUP FOR YOUR LAND DEVELOPMENT?
          </h1>

          <div className="w-full pb-5">
            {amenitiesData.map((section, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg shadow-lg overflow-hidden w-full"
              >
                {/* Green Header */}
                <div
                  className="bg-green-500 text-white p-4 cursor-pointer flex justify-between items-center font-semibold"
                  onClick={() => toggle(index)}
                >
                  <span>{section.category}</span>
                  <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                </div>

                {/* Content */}
                <div
                  className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
                  }`}
                >
                  {openIndex === index && (
                    <p className="text-gray-800 leading-relaxed">{section.items[0]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center bg-green-100 px-6 lg:px-16 py-10 rounded-lg text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-4">Help North South To Build A Better Tomorrow</h1>

          <p className="py-6 text-xl text-green-700 font-semibold">Join Today!</p>

          <button
            onClick={handleOpen}
            className="bg-black/70 border-2 border-green-500 text-white 
                     font-semibold px-6 py-3 rounded-lg shadow-lg 
                     hover:scale-110 transition-all"
          >
            Submit Your CV
          </button>

          {/* Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
              <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-4xl"
                >
                  <IoCloseOutline />
                </button>

                {/* FORM */}
                <section className="w-full bg-gray-100 py-12 px-4 flex justify-center">
                  <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">

                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                      NSGBD CV Form
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Name */}
                      <div>
                        <label className="font-medium">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="font-medium">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label className="font-medium">Contact Address</label>
                        <textarea
                          name="address"
                          rows="3"
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                        ></textarea>
                      </div>

                      {/* CV Upload */}
                      <div>
                        <label className="font-medium">
                          Upload CV <span className="text-red-600">(PDF only)</span>
                        </label>
                        <input
                          type="file"
                          name="cv"
                          accept="application/pdf"
                          onChange={handleChange}
                          required
                          className="w-full bg-white border px-4 py-3 rounded-lg cursor-pointer"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          CV should include your image (PDF only).
                        </p>
                      </div>

                      {/* Button */}
                      <button
                        type="submit"
                        className="w-full mt-3 bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md"
                      >
                        Submit
                      </button>
                    </form>

                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
