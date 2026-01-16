import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoIosLogIn } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


import { Outlet } from "react-router-dom";
import ViewDashboard from "./ViewDashboard";
import { useAuthStore } from "../../store/auth/authStore";

export default function AdminDashboard() {
  const drawerWidth = 240;
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen((prev) => !prev);

    const {user,logoutUser,isLoggedIn} = useAuthStore();
    
    const profilePicUrl = user?.profilePic?.url

  const logOut = async () => {
     try {
    const responseMessage = await logoutUser();   // <-- wait for return
    toast.success(responseMessage.message || "Logout Successful!");
  } catch (error) {
    toast.error(error || "Logout failed");
  }
  }
  return (
    <>
      {/* Top Navbar */}
      <div
        className={`bg-white shadow px-2 pb-4 sm:px-4 flex items-center justify-between gap-2 transition-all duration-300`}
        style={{ marginLeft: open ? drawerWidth : 0 }}
      >
        <div className="flex gap-2 justify-center items-center px-2">
          <img
            src={profilePicUrl}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h2 className="font-bold">{user.name}</h2>
        </div>
        {open ? (
          <div
            onClick={toggleDrawer}
            className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-300 cursor-pointer"
          >
            <IoMdClose size={20} />
          </div>
        ) : (
          <div
            onClick={toggleDrawer}
            className="flex justify-center items-center w-8 h-8 cursor-pointer"
          >
            <CiMenuFries size={20} />
          </div>
        )}
      </div>

      {/* Main Content */}
<div
  className="h-auto transition-all duration-300 p-4"
  style={{ marginLeft: open ? drawerWidth : 0 }}
>
  {/* Show initial content if no nested route is active */}
  {!location.pathname.includes("/adminDashboard/") && (
  <ViewDashboard/>
  )}

  {/* Only render the Outlet if a nested route is active */}
  {location.pathname !== "/adminDashboard" && <Outlet />}
</div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-50 transform transition-transform duration-300`}
        style={{
          width: drawerWidth,
          transform: open ? "translateX(0)" : `translateX(-${drawerWidth}px)`,
        }}
      >
        <div className="p-3.5 border-b flex items-center justify-center ">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
<div className="h-[90vh] overflow-auto  scrollbar-hide">
        <ul className="">
          <li className="py-2 px-2 border-b">
            <Link
              to="/adminDashboard/viewDashboard"
              onClick={toggleDrawer}
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </li>
          <li className="py-2 px-2 border-b">
            <Link
              to="viewProjects"
              // onClick={toggleDrawer}
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
               Projects
            </Link>
          </li>
          
       
              <li className="py-2 px-2 border-b">
            <Link
              to="viewNewsEvents"
              //onClick={toggleDrawer}
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
            News & Event
            </Link>
          </li>
          
         
           <li className="py-2 px-2 border-b">
            <Link
              to="viewGreenCity"
            
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
               Green City
            </Link>
          </li>
          
          
           <li className="py-2 px-2 border-b">
            <Link
              to="viewSquareCity"
              
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
               Square City
            </Link>
          </li>
          
          <li className="py-2 px-2 border-b">
            <Link
              to="viewIndustrialCity"
             
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
               Industrial City
            </Link>
          </li>
              <li className="py-2 px-2 border-b">
            <Link
              to="viewReview"
             
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
             Review
            </Link>
          </li>
           <li className="py-2 px-2 border-b">
            <Link
              to="viewPartners"
             
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
             Partners
            </Link>
          </li>
          <li className="py-2 px-2 border-b">
            <Link
              to="viewContact"
             
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
             Contact
            </Link>
          </li>
              <li className="py-2 px-2 border-b">
            <Link
              to="viewPlotBooking"
             
              className="block px-2 py-1 rounded hover:bg-gray-100"
            >
             PlotBooking
            </Link>
          </li>
                  

          <li onClick={logOut} className="py-2 px-2 border-b">
            <Link
              onClick={toggleDrawer}
              className="flex gap-1 items-center px-2 py-1 rounded hover:bg-gray-100"
            >
              <p>Logout</p> <IoIosLogIn />
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
