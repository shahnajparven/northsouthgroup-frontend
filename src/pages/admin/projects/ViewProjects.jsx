
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProjectStore } from "../../../store/project/projectStore";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";

const ViewProjects = () => {
  const navigate = useNavigate();
    const { projects, isLoading,loadProjects,deleteProject } = useProjectStore();

   useEffect(() => {
   loadProjects()
   }, [loadProjects])

const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      toast.success("Project deleted successfully!");
      await loadProjects(); 
  navigate("/adminDashboard/viewProjects"); // go to project list
    } catch (err) {
      toast.error("Failed to delete project");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },

  { field: "title", headerName: "Project Title", width: 180 },

  {
    field: "location",
    headerName: "Location",
    width: 200,
    renderCell: (params) => (
      <a
        href={params.value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View Map
      </a>
    ),
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <span
        className={`px-2 py-1 rounded text-white text-sm ${
          params.value === "Ready"
            ? "bg-green-600"
            : params.value === "Ongoing"
            ? "bg-yellow-500"
            : "bg-blue-600"
        }`}
      >
        {params.value}
      </span>
    ),
  },

  {
    field: "handover",
    headerName: "Handover",
    width: 150,
  },

  {
    field: "buildingType",
    headerName: "Type",
    width: 150,
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => (
      <div className="flex gap-2">
        <Link to={`/adminDashboard/projectDetails/${params.id}`}>
          <button className="px-3 py-1 bg-green-600 text-white rounded">
            View
          </button>
        </Link>

        <Link to={`/adminDashboard/updateProject/${params.id}`}>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(params.id)}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    ),
  },
];

const rows = Array.isArray(projects)
  ? projects.map((project, index) => ({
      id: project._id,   // 🔥 REQUIRED
      no: index + 1,
      title: project.title,
      location: project.location,
      status: project.status,
      handover: project.specs?.handover,
      buildingType: project.specs?.buildingType,
    }))
  : [];


  return (
    <>
     <div>
                <div className="w-full flex justify-end p-4">
                  <Link to="/adminDashboard/createProject">
                    <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                      <FaPlus className="text-white" />
        
                      <span className="text-white font-bold">Create Project</span>
                    </div>
                  </Link>
                </div>
              </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Project List</p>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>
      )}
    </>
  );
};

export default ViewProjects;
