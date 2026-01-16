
import { IoCloseOutline } from "react-icons/io5";
import "./Project.css";
import { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../index.css";

AOS.init();




const features = [
  {
    title: "Best Real Estate",
    shortDescription:
      "We provide premium real estate projects with great locations and designs.",
    description:
      "North South Group started in 2021 with a simple but heartfelt pledge to provide quality homes for the residents of Dhaka City. Although Dhaka was much smaller at the time of our inception, the management saw the potential of this city and poured all our energies into making North South Group a company that could rise to the challenge of meeting the rapidly growing housing needs of Dhaka city. North South Group carefully hand-picked our team of engineers, architects, and management professionals and worked hard to build the perfect home for you. Now, with 3 years of experience, North South Group has built over 3 apartments all around Dhaka city and has become the first real estate company in Bangladesh. Our quality management systems and our professionalism. However, the most important achievement has been earning the trust and confidence of clients and patrons like yourself and being given the opportunity to build the home of their dreams.",
  },
  {
    title: "High Quality Control",
    shortDescription:
      "Every project is carefully monitored to maintain the highest quality standards.",
    description:
      "North South Group is the first real estate company in Bangladesh. Our quality management systems, our professionalism, and our continuous innovation in design and construction. This means that as a landowner, you can leave the hassles of property development in our trusted hands and see your dreams transformed into reality by the leading real estate developer in Bangladesh.",
  },
  {
    title: "100% Client Satisfaction",
    shortDescription:
      "We make sure our clients are happy and fully satisfied with our services.",
    description:
      "At North South Group, we believe in the motto: “Once a client, always a client.” Even after handover, we are here to provide any service, whether it is help with interior design, maintenance, or simply being a listening ear for your feedback. We have many experiences of helping clients and landowners with various requests.",
  },
  {
    title: "On-Time Handover",
    shortDescription:
      "Projects are delivered on time with no delays, ensuring trust and reliability.",
    description:
      "At North South Group, our commitment to clients forms the very core of our business. As such, we have always handed over our projects to clients on time, regardless of the prevailing market conditions. Even recently, when the real estate sector of Bangladesh suffered from a severe recession, North South Group still handed over all our projects on time.",
  },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleOpen = (feature) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeature(null);
  };

  return (
    <>

      <div className="need_img w-full h-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-sm md:text-2xl lg:text-4xl uppercase font-bold text-white  mb-12 animate-fadeIn">
            Why do you like our projects?
          </h1>

          <div className="w-full flex justify-center items-center py-12">
            <div className="w-full max-w-4xl px-4">
              <div  className= "grid gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
                {features.map((feature, i) => (
                  <div data-aos="fade-up"
  data-aos-delay={i * 150}>
                <div
  
  key={i}
  onClick={() => handleOpen(feature)}
  className="bg-white rounded-2xl p-8 shadow-lg transform will-change-transform transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer"
>
  <div>
  <h2 className="text-lg font-semibold mb-2 text-green-500">
    {feature.title}
  </h2>
  <p className="text-gray-600">{feature.shortDescription}</p>
  </div>
</div>
</div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full py-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b-2 border-gray-300 px-6 pb-4">
              <h3 className="text-lg font-semibold">{selectedFeature.title}</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-800"
              >
                <IoCloseOutline size={30}/>
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-4 text-gray-700 px-6">
              <p>{selectedFeature.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
