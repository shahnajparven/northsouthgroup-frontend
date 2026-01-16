
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { usePartnerStore } from "../../../store/partners/partnersStore";

const ViewPartners = () => {
  const navigate = useNavigate();
    const { partners, isLoading,loadPartners,deletePartners } = usePartnerStore();

   useEffect(() => {
   loadPartners()
   }, [loadPartners])

const handleDelete = async (id) => {
    try {
      await deletePartners(id);
      toast.success("Partners deleted successfully!");
      await loadPartners(); 
  navigate("/adminDashboard/viewPartners"); // go to project list
    } catch (err) {
      toast.error("Failed to delete Partners");
    }
  };


const columns = [
   { field: "id", headerName: "No.", width: 80 },
  { field: "no", headerName: "No.", width: 80 },


  {
      field: "partnersImage",
      headerName: "Image",
      width: 250,
      renderCell: (params) => (
        <img
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
        <Link to={`/adminDashboard/updatePartners/${params.id}`}>
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

const rows = Array.isArray(partners)
  ? partners.map((partner, index) => ({
      id: partner._id,   // 🔥 REQUIRED
      no: index + 1,
      partnersImage: partner.partnersImage,
      
    }))
  : [];


  return (
    <>
    <div>
            <div className="w-full flex justify-end p-4">
              <Link to="/adminDashboard/createPartners">
                <div className="flex items-center gap-2 w-full bg-green-500 p-2">
                  <FaPlus className="text-white" />
    
                  <span className="text-white font-bold">Create Partners</span>
                </div>
              </Link>
            </div>
          </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Partners List</p>
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

export default ViewPartners;
