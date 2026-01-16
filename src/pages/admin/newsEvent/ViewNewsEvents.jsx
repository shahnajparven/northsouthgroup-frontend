
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";
import { FaPlus } from "react-icons/fa";

const ViewNewsEvents = () => {
  const navigate = useNavigate();
    const { newsEvents, isLoading,loadNewsEvents,deleteNewsEvent } = useNewsEventsStore();

   useEffect(() => {
   loadNewsEvents()
   }, [loadNewsEvents])

const handleDelete = async (id) => {
    try {
      await deleteNewsEvent(id);
      toast.success("News & Events deleted successfully!");
      await loadNewsEvents(); 
  navigate("/adminDashboard/viewNewsEvents"); // go to project list
    } catch (err) {
      toast.error("Failed to delete News & Events");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },

  { field: "title", headerName: "Project Title", width: 180 },

  {
    field: "description",
    headerName: "Description",
    width: 200
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => (
      <div className="flex gap-2">
        <Link to={`/adminDashboard/newsEventDetails/${params.id}`}>
          <button className="px-3 py-1 bg-green-600 text-white rounded">
            View
          </button>
        </Link>

        <Link to={`/adminDashboard/updateNewsEvents/${params.id}`}>
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

const rows = Array.isArray(newsEvents)
  ? newsEvents.map((newsEvent, index) => ({
      id: newsEvent._id,   // 🔥 REQUIRED
      no: index + 1,
      title: newsEvent.title,
      description: newsEvent.description,
      
    }))
  : [];


  return (
    <>
    <div>
            <div className="w-full flex justify-end p-4">
              <Link to="/adminDashboard/createNewsEvent">
                <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                  <FaPlus className="text-white" />
    
                  <span className="text-white font-bold">Create news & Event</span>
                </div>
              </Link>
            </div>
          </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">News & Event List</p>
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

export default ViewNewsEvents;
