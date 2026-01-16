import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { useReviewStore } from "../../../store/review/reviewStore";
import { useContactStore } from "../../../store/contact/contactStore";

const ViewContact = () => {
  const navigate = useNavigate();
  const { contacts, isLoading, loadContacts, deleteContact } = useContactStore();

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      toast.success("contacts deleted successfully!");
      await loadContacts();
      navigate("/adminDashboard/viewContact"); // go to project list
    } catch (err) {
      toast.error("Failed to delete contacts");
    }
  };

  const columns = [
    { field: "id", headerName: "No.", width: 80 },
    { field: "no", headerName: "No.", width: 80 },

    
    {
      field: "name",
      headerName: "Name",
      width: 100,
    },
    { field: "number", headerName: "Phone Number", width: 180 },

    {
      field: "address",
      headerName: "Address",
      width: 200,
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
   {
      field: "message",
      headerName: "Message",
      width: 200,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div className="flex gap-2">
          <Link to={`/adminDashboard/contactDetails/${params.id}`}>
            <button className="px-3 py-1 bg-green-600 text-white rounded">
              View
            </button>
          </Link>

          <Link to={`/adminDashboard/updateContact/${params.id}`}>
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

 const rows = Array.isArray(contacts)
  ? contacts
      .filter(Boolean) // remove undefined/null
      .map((contact, index) => ({
        id: contact._id,  // always use _id
        no: index + 1,
        name: contact.name || contact.fullName || "-",  // fallback for Meeting page
        number: contact.number || "-",
        address: contact.address || "-",
        email: contact.email || "-",       // only Contact form
        message: contact.message || "-",   // only Contact form
      }))
  : [];


  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className=" h-auto w-full text-center p-8">
          <div className="p-4">
            <p className="underline font-bold text-3xl">Contact and Schedule List</p>
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

export default ViewContact;
