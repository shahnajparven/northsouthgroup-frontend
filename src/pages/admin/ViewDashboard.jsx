import React from "react";
import { FaBuilding, FaVideo, FaUsers, FaClipboardList } from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    value: 12,
    icon: <FaBuilding className="text-4xl text-white" />,
    bg: "bg-blue-500",
  },
  {
    title: "Green City",
    value: 5,
    icon: <FaVideo className="text-4xl text-white" />,
    bg: "bg-green-500",
  },
  {
    title: "Square City",
    value: 7,
    icon: <FaBuilding className="text-4xl text-white" />,
    bg: "bg-yellow-500",
  },
  
  
];

const ViewDashboard = () => {
  return (
    <div className=" p-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {stats.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer ${card.bg}`}
          >
            <div className="p-4 bg-white rounded-full mr-4 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="text-white">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-2xl font-bold mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDashboard;
