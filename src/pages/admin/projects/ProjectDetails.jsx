import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProjectStore } from "../../../store/project/projectStore";

const ProjectDetails = () => {
  const { id } = useParams();
  const { projectDetails, isLoading, loadProjectDetails, clearProjectDetails } = useProjectStore();

  useEffect(() => {
    loadProjectDetails(id);

    return () => {
      clearProjectDetails(); // clean up when leaving page
    };
  }, [id, loadProjectDetails, clearProjectDetails]);

  if (isLoading) return <p className="p-6">Loading project details...</p>;
  if (!projectDetails) return <p className="p-6">Project not found</p>;

  const project = projectDetails;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow space-y-6">
      {/* Title & Status */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <span
          className={`px-4 py-1 rounded text-white ${
            project.status === "Ready"
              ? "bg-green-500"
              : project.status === "Ongoing"
              ? "bg-yellow-500"
              : "bg-gray-500"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Location */}
      {project.location && (
        <a
          href={project.location}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View on Map
        </a>
      )}

      {/* Images */}
      {project.image?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      )}

      {/* Description */}
      {project.description && (
        <div className="bg-gray-100 p-4 rounded space-y-2">
          <h2 className="text-xl font-semibold">Description</h2>
          {Object.entries(project.description).map(([key, value]) => (
            <p key={key}>
              <span className="font-bold capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>{" "}
              {value}
            </p>
          ))}
        </div>
      )}

      {/* Specs */}
      {project.specs && (
        <div className="bg-gray-50 p-4 rounded space-y-2">
          <h2 className="text-xl font-semibold">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(project.specs).map(([key, value]) => (
              <p key={key}>
                <span className="font-bold capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>{" "}
                {value}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Slide Images */}
      {project.slideImage?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Slide Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.slideImage.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-48 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}

      {/* Map Locations */}
      {project.mapLocation?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Map Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.mapLocation.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Map ${idx + 1}`}
                className="w-full h-48 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
