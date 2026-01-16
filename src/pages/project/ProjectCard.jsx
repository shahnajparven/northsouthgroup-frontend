import { Link } from "react-router-dom";

export default function ProjectCard({ project}) {
 {/* Status Badge */}
        const status = project.status?.toLowerCase();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 border border-gray-200">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={project.image[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mt-4">{project.title.slice(0,17)}</h3>

      {/* Location */}
      <p className="text-gray-600 text-sm">{project.specs.address}</p>

      {/* Footer */}
        
      <div className="flex justify-between items-center mt-4">
       
        <Link
  to={`/consortiumDetails/${project._id}`}
  state={{ project }}
  className="text-white text-sm font-medium hover:underline inline-block rounded-full bg-[#9061F9] px-3 py-1"
>
  View Details
</Link>

       

<span
  className={`
    px-3 py-1 text-sm font-semibold rounded-full
    ${status === "ready" && "bg-green-100 text-green-700"}
    ${status === "ongoing" && "bg-yellow-100 text-yellow-700"}
    ${status === "upcoming" && "bg-blue-100 text-blue-700"}
  `}
>
  {project.status}
</span>

      </div>
    </div>
  );
}
