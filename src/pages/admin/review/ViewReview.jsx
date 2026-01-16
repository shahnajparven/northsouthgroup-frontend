import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { useReviewStore } from "../../../store/review/reviewStore";

const ViewReview = () => {
  const navigate = useNavigate();
  const { reviews, isLoading, loadReviews, deleteReview } = useReviewStore();

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      toast.success("Review deleted successfully!");
      await loadReviews();
      navigate("/adminDashboard/viewReview"); // go to project list
    } catch (err) {
      toast.error("Failed to delete Review");
    }
  };

  const columns = [
    { field: "id", headerName: "No.", width: 80 },
    { field: "no", headerName: "No.", width: 80 },

    { field: "title", headerName: "Review Title", width: 180 },

    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },

    {
      field: "designation",
      headerName: "Designation",
      width: 200,
    },
    {
      field: "reviewVideo",
      headerName: "Review Video",
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
          <Link to={`/adminDashboard/reviewDetails/${params.id}`}>
            <button className="px-3 py-1 bg-green-600 text-white rounded">
              View
            </button>
          </Link>

          <Link to={`/adminDashboard/updateReview/${params.id}`}>
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

  const rows = Array.isArray(reviews)
    ? reviews.map((review, index) => ({
        id: review._id, // 🔥 REQUIRED
        no: index + 1,
        title: review.title,
        description: review.description,
        name: review.name,
        designation: review.designation,
        reviewVideo: review.reviewVideo,
      }))
    : [];

  return (
    <>
      <div>
        <div className="w-full flex justify-end p-4">
          <Link to="/adminDashboard/createReview">
            <div className="flex items-center gap-2 w-full bg-green-500 p-2">
              <FaPlus className="text-white" />

              <span className="text-white font-bold">Create Review</span>
            </div>
          </Link>
        </div>
      </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Review List</p>
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

export default ViewReview;
