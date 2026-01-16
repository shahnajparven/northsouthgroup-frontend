
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useIndustrialCityStore } from "../../../store/industrialCity/industrialCityStore";
import { FaPlus } from "react-icons/fa";

const ViewIndustrialCity = () => {
  const navigate = useNavigate();
    const { industrialCity, isLoading,loadIndustrialCity,deleteIndustrialCity } = useIndustrialCityStore();

   useEffect(() => {
   loadIndustrialCity()
   }, [loadIndustrialCity])

const handleDelete = async (id) => {
    try {
      await deleteIndustrialCity(id);
      toast.success("View Green City deleted successfully!");
      await loadIndustrialCity(); 
  navigate("/adminDashboard/viewIndustrialCity"); // go to project list
    } catch (err) {
      toast.error("Failed to delete News & Events");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },

  
 {
  field: "industrialCityVideo",
  headerName: "Industrial City Video",
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

        <Link to={`/adminDashboard/updateIndustrialCity/${params.id}`}>
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

const rows = Array.isArray(industrialCity)
  ? industrialCity.map((industrial, index) => ({
      id: industrial._id,   // 🔥 REQUIRED
      no: index + 1,
     industrialCityVideo: industrial.industrialCityVideo,

      
    }))
  : [];


  return (
    <>
     <div>
                    <div className="w-full flex justify-end p-4">
                      <Link to="/adminDashboard/createIndustrialCity">
                        <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                          <FaPlus className="text-white" />
            
                          <span className="text-white font-bold">Create Industrial City</span>
                        </div>
                      </Link>
                    </div>
                  </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Industrial City List</p>
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

export default ViewIndustrialCity;
