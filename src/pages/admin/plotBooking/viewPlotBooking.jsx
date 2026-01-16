import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePlotBookingStore } from "../../../store/plotbooking/plotBookingStore";


const ViewPlotBooking = () => {
  const navigate = useNavigate();
  const { bookings, isLoading, loadBookings, deleteBooking } = usePlotBookingStore();

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);
      toast.success("Plot booking deleted successfully!");
      await loadBookings(); 
      navigate("/adminDashboard/viewPlotBooking"); // stay on the same page
    } catch (err) {
      toast.error("Failed to delete plot booking");
    }
  };

  const columns = [
    { field: "no", headerName: "No.", width: 80 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "block", headerName: "Block", width: 100 },
    { field: "plotNo", headerName: "Plot No", width: 100 },
    { field: "size", headerName: "Size (Katha)", width: 120 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "road", headerName: "Road", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div className="flex gap-2">
          {/* <Link to={`/adminDashboard/plotBookingDetails/${params.id}`}>
            <button className="px-3 py-1 bg-green-600 text-white rounded">
              View
            </button>
          </Link>

          <Link to={`/adminDashboard/updatePlotBooking/${params.id}`}>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              Update
            </button>
          </Link> */}

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

  const rows = Array.isArray(bookings)
    ? bookings
        .filter(Boolean)
        .map((booking, index) => ({
          id: booking._id,
          no: index + 1,
          name: booking.name || "-",
          block: booking.block || "-",
          plotNo: booking.plotNo || "-",
          size: booking.size || "-",
          address: booking.address || "-",
          road: booking.road || "-",
          phone: booking.phone || "-",
          email: booking.email || "-",
        }))
    : [];

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Plot Booking List</p>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
          />
        </div>
      )}
    </>
  );
};

export default ViewPlotBooking;
