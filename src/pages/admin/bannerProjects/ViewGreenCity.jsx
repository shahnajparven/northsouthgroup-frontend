
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useNewsEventsStore } from "../../../store/newsEvent/newsEventStore";
import { useGreenCityStore } from "../../../store/greenCity/greenCityStore";
import { FaPlus } from "react-icons/fa";

const ViewGreenCity = () => {
  const navigate = useNavigate();
    const { greenCity, isLoading,loadGreenCity,deleteGreenCity } = useGreenCityStore();

   useEffect(() => {
   loadGreenCity()
   }, [loadGreenCity])
console.log(greenCity)
const handleDelete = async (id) => {
    try {
      await deleteGreenCity(id);
      toast.success("View Green City deleted successfully!");
      await loadGreenCity(); 
  navigate("/adminDashboard/viewGreenCity"); // go to project list
    } catch (err) {
      toast.error("Failed to delete News & Events");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },

  
   {
  field: "greenCityVideo",
  headerName: "Green City Video",
  width: 250,
  renderCell: (params) => (
    <video
      src={params.value}
      width="50"
      height="50"
      style={{ objectFit: "cover", borderRadius: "6px" }}
    />
  ),
},

  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    renderCell: (params) => (
      <div className="flex gap-2">
        {/* <Link to={`/adminDashboard/newsEventDetails/${params.id}`}>
          <button className="px-3 py-1 bg-green-600 text-white rounded">
            View
          </button>
        </Link> */}

        <Link to={`/adminDashboard/updateGreenCity/${params.id}`}>
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

const rows = Array.isArray(greenCity)
  ? greenCity.map((green, index) => ({
      id: green._id,   // 🔥 REQUIRED
      no: index + 1,
      greenCityVideo: green.greenCityVideo,

      
    }))
  : [];


  return (
    <>
     <div>
                    <div className="w-full flex justify-end p-4">
                      <Link to="/adminDashboard/createGreenCity">
                        <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                          <FaPlus className="text-white" />
            
                          <span className="text-white font-bold">Create Green City</span>
                        </div>
                      </Link>
                    </div>
                  </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Green City List</p>
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

export default ViewGreenCity;
