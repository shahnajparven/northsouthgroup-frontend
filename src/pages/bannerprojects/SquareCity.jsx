import squareCityLogo from "../../assets/images/squareCityLogo.png";
import greenCityImg1 from "../../assets/images/greenCityImg1.jpg";
import greenCityImg2 from "../../assets/images/greenCityImg2.jpg";
import greenCityImg3 from "../../assets/images/greenCityImg3.jpg";
import greenCityImg4 from "../../assets/images/greenCityImg4.jpg";
import greenCityImg5 from "../../assets/images/greenCityImg5.jpg";
import greenCityImg6 from "../../assets/images/greenCityImg6.jpg";
import squareCityBrochure from "../../assets/images/squareCityBrochure.png";
import squareCityModalImg from "../../assets/images/squareCityModal_img.png";


import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSquareCityStore } from "../../store/squareCity/squareCityStore";
import GreenCityForm from "./GreenCityForm";

const imageCards = [
  { src: greenCityImg1 },
  { src: greenCityImg2 },
  { src: greenCityImg3 },
  { src: greenCityImg4 },
  { src: greenCityImg5 },
  { src: greenCityImg6 },
];

const SquareCity = () => {
  const [open, setOpen] = useState(false);
  const { squareCity, loadSquareCity } = useSquareCityStore();

  useEffect(() => {
    loadSquareCity();
  }, [loadSquareCity]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Hero Video Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {squareCity?.map((square, idx) => (
          <div key={idx} className="w-full h-full relative">
            <video
              src={square.squareCityVideo}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <img
                src={squareCityLogo}
                alt="Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 object-contain"
              />
              <button
                onClick={handleOpen}
                className="bg-green-700 py-2 sm:py-3 px-6 sm:px-8 rounded-[5px] text-white hover:bg-black/60 border-2 border-white text-sm sm:text-base md:text-lg"
              >
                Project Details
              </button>
            </div>

            {/* Modal */}
            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-3xl"
                  >
                    <IoCloseOutline />
                  </button>
                  
                  <img
                    src={squareCityModalImg}
                    alt="Modal"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                 
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overview & Specifications */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 flex flex-col lg:flex-row gap-8">
        {/* Overview */}
        <div className="lg:w-1/2 bg-white px-6 sm:px-12 py-8 rounded-lg shadow">
          <h1 className="mb-6 text-2xl sm:text-3xl font-semibold text-[#212529]">
            OVERVIEW
          </h1>
          <p className="text-base sm:text-lg mb-4 text-justify">
            North South Group is a market leader in real estate, offering residential projects tailored to buyer needs.
          </p>
          <p className="text-base sm:text-lg text-justify">
            “North South Square City” is a milestone project spanning 600 acres along Dhaka-Sylhet Highway.
          </p>
          <button className="mt-6 bg-[#ffc107] hover:bg-[#e0a800] transition-all px-6 py-3 rounded-md font-medium">
            Read More
          </button>
        </div>

        {/* Specifications */}
        <div className="lg:w-1/2 bg-green-100 px-6 sm:px-12 py-8 rounded-lg shadow">
          <h1 className="mb-6 text-2xl sm:text-3xl font-semibold text-[#212529]">
            SPECIFICATIONS
          </h1>
          <p className="text-base sm:text-lg mb-4 text-justify">
            Eco-friendly layout prepared with RAJUK compliance and urban planning guidelines.
          </p>
          <p className="text-base sm:text-lg mb-4 text-justify">
            Space for civic infrastructure, parks, playgrounds, and a 3 km lake with walkways.
          </p>
          <p className="text-base sm:text-lg text-justify">
            Dedicated zones for education, healthcare, shopping, community centers, and mosques.
          </p>
          <button className="mt-6 bg-[#ffc107] hover:bg-[#e0a800] transition-all px-6 py-3 rounded-md font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* Map & Location Benefits */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.234681393861!2d90.560293!3d23.774656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cb75e96738bd%3A0x375be9bcfd809a7f!2zTm9ydGggU291dGggR3JlZW4gQ2l0eSDgpqjgprDgp43gpqUg4Ka44Ka-4KaJ4KalIOCml-CnjeCmsOCngeCmqg!5e0!3m2!1sen!2sbd!4v1764072732941!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#212529]">
            LOCATION BENEFITS
          </h1>
          <p className="text-base sm:text-lg text-justify">
            Purbachal Square City is easily accessible from all major routes in Dhaka...
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {imageCards.map((card, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={card.src}
              alt={`Card ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Rules & Brochure */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 flex flex-col lg:flex-row gap-8">
        {/* Rules */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-2xl sm:text-3xl mb-4 text-[#212529] text-center lg:text-left">
            RULES & REGULATION
          </h1>
          <p className="text-base sm:text-lg text-justify mb-4">
            RAJUK exercises development control as per East Bengal Building Construction Act, 1952 and guidelines.
          </p>
          <button className="bg-[#ffc107] hover:bg-[#e0a800] px-6 py-3 rounded-md font-medium">Read More</button>
        </div>

        {/* Brochure */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <img
              src={squareCityBrochure}
              alt="Brochure"
              className="w-full h-auto rounded-lg"
            />
            <a
              href="/square.pdf"
              download
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition font-semibold text-sm md:text-base"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-screen-xl mx-auto py-12 px-4">
        <GreenCityForm />
      </div>
    </>
  );
};

export default SquareCity;
