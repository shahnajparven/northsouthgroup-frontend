import ProjectCard from "./ProjectCard";
import { useProjectStore } from "../../store/project/projectStore";
import { useEffect, useMemo } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Projects({ type = "all" }) {
  const { projects, loadProjects, isLoading } = useProjectStore();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  // ✅ FILTER AFTER projects is available
  const filteredProjects = useMemo(() => {
    if (type === "all") return projects;

    return projects.filter(
      (p) => p.status?.toLowerCase() === type
    );
  }, [projects, type]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <FaSpinner className="animate-spin" size={50} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Projects
      </h1>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500">
          No projects found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
