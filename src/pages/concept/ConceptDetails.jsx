import { useEffect, useState } from "react";
import duplex from "../../assets/images/duplex.jpg";
import photo1 from "../../assets/images/gallery1.jpg";
import photo2 from "../../assets/images/gallery2.jpg";
import photo3 from "../../assets/images/gallery3.jpg";
import photo4 from "../../assets/images/gallery4.jpg";
import photo5 from "../../assets/images/gallery5.jpg";
import photo6 from "../../assets/images/gallery6.jpg";
import photo7 from "../../assets/images/gallery7.jpg";
import photo8 from "../../assets/images/gallery8.jpg";

import basement from "../../assets/images/basement.jpg";
import groundFloor from "../../assets/images/groundFloor.jpg";
import typicalFloor from "../../assets/images/typicalFloor.jpg";
import roofFloor from "../../assets/images/roofFloor.jpg";

import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LocationMap from "./locationMap/LocationMap";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
const keyPhotos = [basement, groundFloor, typicalFloor, roofFloor];

const amenitiesData = [
  {
    category: "GENERAL FEATURES",
    items: [
      "A framed structure as per BNBC.",
      "5” thick first class brick wall/as-cast wall/concrete hollow block/concrete solid block.",
      "Stone aggregate used for all structural components.",
      "60/72.5 grade deformed bar used in all structural members.",
      "Good quality cement used.",
    ],
  },
  {
    category: "BATHROOM FEATURES",
    items: [
      "Floor tiles: 12”x12” (Sheltech Ceramics/Equivalent).",
      "Wall tiles (up to 7'-0” height): 12”x24” (Equivalent).",
      "Sanitary wares in toilets (Charu/Equivalent) except maid's toilet.",
      "Cabinet basin (Charu/Equivalent) with marble top in master toilet (subject to space availability)",
      "Pedestal basin (Charu/Equivalent) in toilet-2 and common toilet.",
    ],
  },
  {
    category: "ELEVATOR",
    items: [
      "Three no International Standard lift from Sakura/Fuji/Schneider or Equivalent.",
      "2 no 13 passengers lift.",
      "1 no 10 passengers Lift",
    ],
  },

  {
    category: "KITCHEN DOORS",
    items: [
      "-Aluminum top sliding glass door for kitchen.Verandah door:-Aluminum sliding shutter/Formica laminated door shutter/equivalent for verandah (depending on design).",
    ],
  },
  {
    category: "MAIDS TOILET (IF ANY):",
    items: [
      "K-Door of solid PVC/equivalent door shutter and PVC frame/equivalent.(Note: In case of concrete block (hollow/solid), door frame size may be changed.)",
    ],
  },
];
const ConceptDetails = () => {
  const [loaded, setLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);


  const buttons = ["Basement", "Ground Floor", "Typical Floor", "Roof Floor"];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // only one open
  };

  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const [keyPlanOpen, setKeyPlanOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const handleOpen = (photos) => {
    setSelectedFeature(photos);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeature(null);
  };

  const handleKeyPlanOpen = (keyPhotos) => {
    setSelectedKey(keyPhotos);
    setKeyPlanOpen(true);
  };

  const handleKeyPlanClose = () => {
    setSelectedKey(false);
    setSelectedFeature(null);
  };

  return (
    <div id='concept' className=" bg-gray-50 min-h-screen">
      {/* Hero Image */}
      <div className="relative overflow-hidden">
  <img
    src={duplex}
    alt="North South Duplex"
    decoding="sync"
    className="w-full h-96 object-cover"
  />
  <div className="absolute top-1/2 left-1/3 flex items-center justify-center">
    <h1 className="text-white text-4xl sm:text-5xl font-bold animate-fadeIn">
      North South Duplex Home
    </h1>
  </div>
</div>

      {/* Info Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-[-50px] p-6 sm:p-10 relative z-10 transform transition-all duration-700 hover:scale-105">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              label: "Project Address",
              value: "NSGC Block-VIP1, Rupganj, Narayanganj",
            },
            { label: "ownload Area", value: "100 Bigha" },
            { label: "Apartment Size", value: "3600 sft" },
            { label: "Total Units", value: "1" },
            { label: "Number of Lifts", value: "0" },
            { label: "Date of Completion", value: "2024-09-26" },
            { label: "Building Type", value: "Luxerias Duplex Home" },
            { label: "Levels / Stories", value: "G+1" },
            { label: "Parking", value: "2" },
            { label: "Stairs", value: "1" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#37C18E] rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl duration-500"
            >
              <h3 className="font-semibold text-[white]">{item.label}</h3>
              <p className="text-white">{item.value}</p>
            </div>
          ))}
        </div>
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
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInDown">
          Photo Gallery
        </h2>

        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <div
              onClick={() => handleOpen(photo)} // pass the clicked photo
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Image */}
              <img
                src={photo}
                // alt={project.title}
                className="w-full h-full object-cover transform 
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
                <h3 className="text-xl text-white font-semibold">Title</h3>
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
                className="absolute top-4 right-4 text-white hover:text-gray-800 text-4xl"
              >
                <IoCloseOutline />
              </button>

              {/* Modal Photo */}
              <img
                src={selectedFeature} // use selectedFeature directly
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInDown">
            Features & Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pb-5">
            {amenitiesData.map((section, index) => (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                {/* Green Header */}
                <div
                  className="bg-green-500 text-white p-4 cursor-pointer flex justify-between items-center font-semibold"
                  onClick={() => toggle(index)}
                >
                  <span>{section.category}</span>
                  <span className="text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                {/* White Content Div */}
                <div
                  className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
                  }`}
                >
                  {openIndex === index && (
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 mb-15">
            <Link to="">
              <button className="mt-4 px-12 py-3 font-semibold text-green-700 text-[16px] border-2 border-green-700">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <LocationMap />
      </div>
    </div>
  );
};

export default ConceptDetails;
