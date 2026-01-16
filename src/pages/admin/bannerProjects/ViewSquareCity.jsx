
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSquareCityStore } from "../../../store/squareCity/squareCityStore";
import { FaPlus } from "react-icons/fa";

const ViewSquareCity = () => {
  const navigate = useNavigate();
    const { squareCity, isLoading,loadSquareCity,deleteSquareCity } = useSquareCityStore();

   useEffect(() => {
   loadSquareCity()
   }, [loadSquareCity])

const handleDelete = async (id) => {
    try {
      await deleteSquareCity(id);
      toast.success("View Square City deleted successfully!");
      await loadSquareCity(); 
  navigate("/adminDashboard/viewSquareCity"); // go to project list
    } catch (err) {
      toast.error("Failed to delete Square city");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },
 {
  field: "squareCityVideo",
  headerName: "Square City Video",
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

        <Link to={`/adminDashboard/updateSquareCity/${params.id}`}>
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

const rows = Array.isArray(squareCity)
  ? squareCity.map((square, index) => ({
      id: square._id,   // 🔥 REQUIRED
      no: index + 1,
      squareCityVideo: square.squareCityVideo,

      
    }))
  : [];


  return (
    <>
     <div>
                    <div className="w-full flex justify-end p-4">
                      <Link to="/adminDashboard/createSquareCity">
                        <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                          <FaPlus className="text-white" />
            
                          <span className="text-white font-bold">Create Square City</span>
                        </div>
                      </Link>
                    </div>
                  </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Square City List</p>
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

export default ViewSquareCity;
