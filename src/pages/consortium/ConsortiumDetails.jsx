import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import "../../index.css";

import Projects from "../project/Projects";
import Carousel from "../../components/Carousel";
import ProjectLocationMap from "./ProjectLocationMap";
import { IoCloseOutline } from "react-icons/io5";


export default function ProjectDetails() {
  const buttons = ["Basement", "Ground Floor", "Typical Floor", "Roof Floor"];
  const { state } = useLocation();
  const { project } = state || {};

  if (!project) return <p>Card not found</p>;

  const [selectedFeature, setSelectedFeature] = useState(null);

  const [keyPlanOpen, setKeyPlanOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [open, setOpen] = useState(false);

  const handleKeyPlanOpen = (keyPhotos) => {
    setSelectedKey(keyPhotos);
    setKeyPlanOpen(true);
  };

  const handleKeyPlanClose = () => {
    setSelectedKey(false);
    setSelectedFeature(null);
  };
  // use image array from card
  const images = project.image || [];
  const maps = project.maps || [];
  const desc = project.description || {}; // single object
  const projectSpecs = project.specs || {};

  const slideImages = project.slideImage.filter(Boolean) || [];
  const keyPhotos = project.keyPhotos
    ? [
        project.keyPhotos.basement,
        project.keyPhotos.groundFloor,
        project.keyPhotos.typicalFloor,
        project.keyPhotos.roofFloor,
      ].filter(Boolean)
    : [];

  const photos = [...images, ...slideImages]; // combine all images
  const [current, setCurrent] = useState(0);

  const handleOpen = (photos) => {
    setSelectedFeature(photos);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedFeature(null);
  };

  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal");
          void el.offsetWidth;
          el.classList.add("reveal");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="relative w-full">
        <Carousel images={slideImages} />
        <h1
          className="fade-scroll absolute inset-0 flex items-center justify-center 
             text-white text-2xl md:text-4xl lg:text-6xl font-bold 
             text-center px-8 py-6 md:px-16 md:py-10"
        >
          Welcome to {project.title} – Where Comfort Meets Luxury
        </h1>

        <div
          className="
  absolute 
  bottom-3 left-3                
  md:bottom-6 md:left-6         
  text-white 
  max-w-xs md:max-w-sm 
  space-y-2 md:space-y-3
"
        >
          <p className="text-xs md:text-sm lg:text-xl py-1 md:py-4">
            Spacious apartments with state-of-the-art amenities in the heart of
            Dhaka.
          </p>

          <button
            className="
    px-4 py-1 text-sm              
    md:px-6 md:py-2 md:text-base
    border-2 border-white 
    text-white font-semibold 
    rounded-md shadow-lg 
    hover:bg-green-700 transition
  "
          >
            Click Here
          </button>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-6">
        {/* LEFT TEXT */}
        <div
          className="flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="slide-title text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Features & Amenities
          </h2>

          <b className="py-4">GENERAL FEATURES</b>
          <p className="text-gray-700 text-lg leading-8 mt-6 text-center lg:text-left">
            {desc.generalFeature}
          </p>

          <b className="py-4">ELEVATOR</b>
          <p className="text-gray-700 text-lg leading-8 mt-2">
            {desc.elevator}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        {images[4] && (
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={images[4]}
              alt="Project"
              className="rounded-xl w-full h-[80vh] object-contain"
            />
          </div>
        )}
      </div>

      {/* SECTION 2 */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pb-20">
        {/* IMAGE LEFT */}
        {images[2] && (
          <div className="flex" data-aos="fade-right" data-aos-duration="1000">
            <img
              src={images[2]}
              alt="Building"
              className="rounded-xl w-full h-[80vh] object-contain"
            />
          </div>
        )}

        {/* TEXT RIGHT */}
        <div
          className="flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <b className="py-4">BATHROOM FEATURES</b>
          <p className="text-gray-700 text-lg leading-8 mt-6">
            {desc.bathroomFeature}
          </p>

          <b className="py-4">KITCHEN DOOR</b>
          <p className="text-gray-700 text-lg leading-8 mt-2">
            {desc.kitchenDoor}
          </p>

          <b className="py-4">MAIDS TOILET (IF ANY)</b>
          <p className="text-gray-700 text-lg leading-8 mt-2">
            {desc.maidsToilet}
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full mt-25"
      >
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {/* LEFT: IMAGE SLIDER */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
              <div className="px-10">
                <img
                  src={images[current]}
                  alt="project"
                  className="w-full h-full object-contain duration-700"
                />
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex justify-center flex-wrap gap-3 py-4 mt-30">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrent(i)}
                  className={`w-15 h-15 object-cover rounded cursor-pointer border ${
                    current === i ? "border-green-600" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="w-full h-auto px-4 md:px-8">
            {/* SPECIFICATION */}
            <div className="max-w-4xl mx-auto px-2 md:px-4">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                SPECIFICATION
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                {Object.entries(projectSpecs).map(([key, value]) => (
                  <Specs
                    key={key}
                    label={
                      key
                        .replace(/([A-Z])/g, " $1") // add space before capital letters
                        .replace(/^./, (str) => str.toUpperCase()) + ":"
                    }
                    value={value}
                  />
                ))}
              </div>
              <button className="slide-hover mt-8 px-10 py-3 font-semibold text-green-700 hover:text-white border-2 border-green-700">
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8">
        <ProjectLocationMap project={project} />
      </div>
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16 mt-15">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 animate-fadeInDown">
          Key Plan
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleKeyPlanOpen(keyPhotos[index])} // pass the correct image
              className={`bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg
                       transform transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-600
        hover:shadow-green-500/50
                       animate-bounceAnimation`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {btn}
            </button>
          ))}
        </div>
        {/* Modal */}
        {keyPlanOpen && selectedKey && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
              {/* Close Button */}
              <button
                onClick={handleKeyPlanClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-4xl"
              >
                <IoCloseOutline />
              </button>

              {/* Modal Photo */}
              <img
                src={selectedKey} // use selectedFeature directly
                alt="Selected"
                className="w-full h-[70dvh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
     
      <div className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInDown">
          Photo Gallery
        </h2>

        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, i) => (
            <div
              onClick={() => handleOpen(photo)} // pass the clicked photo
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              // data-aos="fade-up"
              // data-aos-delay={i * 150}
            >
              {/* Image */}
              <img
                src={photo}
                // alt={project.title}
                className="w-full h-[50dvh] object-cover transform 
                                     transition duration-700 group-hover:scale-110 
                                     group-hover:rotate-3" // slight rotation
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Title + Slide Up Effect */}
              <div
                className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 
                                     translate-y-5 group-hover:translate-y-0 transition duration-500"
              >
                <h3 className="text-xl text-white font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {open && selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-800 text-4xl"
              >
                <IoCloseOutline />
              </button>

              {/* Modal Photo */}
              <img
                src={selectedFeature} // use selectedFeature directly
                alt="Selected"
                className="w-full h-[80vh] rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <Projects />
    </div>
  );
}

function Specs({ label, value }) {
  return (
    <div>
      <p className="font-bold">{label}</p>
      <p>{value}</p>
    </div>
  );
}
