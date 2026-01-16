// import React, { useState } from 'react'
// const amenitiesData = [
//   {
//     category: "Maximum Return on Investment",
//     items: [
//       "With our aesthetic design, professional construction, and personalized customer service, North South Group is one of the most trusted brands in the real estate industry of Bangladesh. As a landowner, whether you choose to live in the home of your dreams that North South Group will build for you, or re-sell it, we guarantee that you will get the maximum return on your investment.",
//     ],
//   },
//   {
//     category: "In-House Legal and Design Team",
//     items: [
//       "North South Group guarantees a smooth and hassle free journey as you develop your property with us and build your dream home. Whether it is sorting out legal complications with your land, or translating the vision for your property into reality, our in house legal and design teams will help you throughout the way.",
//     ],
//   },
//   {
//     category: "RAJUK Approved, BNBC Code Compliant",
//     items: [
//       "Along with our experienced construction team, we have separate safety and quality teams that monitor each aspect of construction, and guarantee that the building is being constructed exactly according to design, while maintaining material and workmanship quality, as well as worker safety.",
//     ],
//   },

//   {
//     category: "On-Time Handover",
//     items: [
//       "At North South Group, our commitment to clients forms the very core of our business. As such, we have always handed over our project to clients on time, regardless of the prevailing market conditions. Even recently, when the real estate sector of Bangladesh suffered from a severe recession, North South Group has still handed over all our projects on time.",
//     ],
//   },
//   {
//     category: "After Handover Service",
//     items: [
//       "At North South Group, we believe in the motto: “Once a client, always a client.” Even after handover, we are here to provide any service, whether it is help with interior design, maintenance, or simply being a listening ear for your feedback. We have many experiences of helping clients and landowners with various requests even 3 years.",
//     ],
//   },
// ];
// const TrustNorthSouth = () => {
//      const [openIndex, setOpenIndex] = useState(null);
//      const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // only one open
//   };
//   return (
//    <div className="flex flex-col lg:flex-row items-stretch gap-12">
//   {/* Text Section */}
//   <div className="lg:w-1/2 flex flex-col justify-center items-center pl-[10%]">
//     <h1 className="py-8 text-[30px] text-[#212529] text-center lg:text-left">
//       WHY YOU SHOULD TRUST NORTH SOUTH GROUP FOR YOUR LAND DEVELOPMENT?
//     </h1>

//     <div className="w-full pb-5">
//       {amenitiesData.map((section, index) => (
//         <div key={index} className="mb-4 rounded-lg shadow-lg overflow-hidden w-full">
//           {/* Green Header */}
//           <div
//             className="bg-green-500 text-white p-4 cursor-pointer flex justify-between items-center font-semibold"
//             onClick={() => toggle(index)}
//           >
//             <span>{section.category}</span>
//             <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
//           </div>

//           {/* White Content Div */}
//           <div
//             className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
//               openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
//             }`}
//           >
//             {openIndex === index && (
//               <ul className="list-disc list-inside space-y-2 text-gray-800">
//                 {section.items.map((item, idx) => (
//                   <p key={idx}>{item}</p>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Right Section */}
// <div className="lg:w-1/2 flex flex-col justify-center items-center bg-green-100 px-6 lg:px-16 h-[80vh] text-center lg:text-left">
//   <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4">
//     START YOUR JOINT VENTURE WITH NORTH SOUTH GROUP TODAY!
//   </h1>
//   <p className="text-lg sm:text-xl lg:text-2xl text-green-700">
//     Talk to our Legal Advisor: 018 9493 9226
//   </p>
// </div>

// </div>

//   )
// }

// export default TrustNorthSouth
import React, { useState } from "react";
import useReveal from "../../components/useReveal";

const amenitiesData = [
  {
    category: "Maximum Return on Investment",
    items: [
      "With our aesthetic design, professional construction, and personalized customer service, North South Group is one of the most trusted brands in the real estate industry of Bangladesh. As a landowner, whether you choose to live in the home of your dreams that North South Group will build for you, or re-sell it, we guarantee that you will get the maximum return on your investment.",
    ],
  },
  {
    category: "In-House Legal and Design Team",
    items: [
      "North South Group guarantees a smooth and hassle free journey as you develop your property with us and build your dream home. Whether it is sorting out legal complications with your land, or translating the vision for your property into reality, our in house legal and design teams will help you throughout the way.",
    ],
  },
  {
    category: "RAJUK Approved, BNBC Code Compliant",
    items: [
      "Along with our experienced construction team, we have separate safety and quality teams that monitor each aspect of construction, and guarantee that the building is being constructed exactly according to design, while maintaining material and workmanship quality, as well as worker safety.",
    ],
  },
  {
    category: "On-Time Handover",
    items: [
      "At North South Group, our commitment to clients forms the very core of our business. As such, we have always handed over our project to clients on time, regardless of the prevailing market conditions. Even recently, when the real estate sector of Bangladesh suffered from a severe recession, North South Group has still handed over all our projects on time.",
    ],
  },
  {
    category: "After Handover Service",
    items: [
      "At North South Group, we believe in the motto: “Once a client, always a client.” Even after handover, we are here to provide any service, whether it is help with interior design, maintenance, or simply being a listening ear for your feedback. We have many experiences of helping clients and landowners with various requests even 3 years.",
    ],
  },
];

const TrustNorthSouth = ({className=''}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
const ref = useReveal();
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 px-4 md:px-10 py-10">
      
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 ref={ref} className={`slide-title ${className} mt-6 mb-6 text-2xl md:text-3xl font-semibold text-[#212529] text-center lg:text-left`}>
          WHY YOU SHOULD TRUST NORTH SOUTH GROUP FOR YOUR LAND DEVELOPMENT?
        </h1>

        <div className="w-full pb-5">
          {amenitiesData.map((section, index) => (
            <div key={index} className="mb-4 rounded-lg shadow-md overflow-hidden w-full">
              
              <div
                className="bg-green-500 text-white p-4 cursor-pointer flex justify-between items-center font-semibold"
                onClick={() => toggle(index)}
              >
                <span>{section.category}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </div>

              <div
                className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[300px] p-4" : "max-h-0 p-0"
                }`}
              >
                {openIndex === index && (
                  <div className="text-gray-800 space-y-2">
                    {section.items.map((item, idx) => (
                      <p key={idx} className="leading-relaxed">{item}</p>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-green-100 px-6 md:px-10 lg:px-14 py-10 rounded-lg text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          START YOUR JOINT VENTURE WITH NORTH SOUTH GROUP TODAY!
        </h1>

        <p className="text-xl md:text-2xl text-green-700 font-semibold">
          Talk to our Legal Advisor: <br />
          018 9493 9226
        </p>
      </div>

    </div>
  );
};

export default TrustNorthSouth;
