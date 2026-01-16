import * as React from "react";
import { useState, useCallback } from "react";
import logo from "../../assets/images/logo.png";
import { SlCallOut } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuthStore } from "../../store/auth/authStore";
import { toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";


function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
    const {user,logoutUser,isLoggedIn} = useAuthStore();
    
    const profilePicUrl = user?.profilePic?.url
    // ? `http://localhost:8000${user.profilePic.url}` // prepend backend host
    // : "/default-profile.png"; // fallback if no image

console.log(profilePicUrl)
  // Prevents unnecessary re-renders
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

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
      {/* NAVBAR */}
      <nav className="bg-white/40 backdrop-blur-md fixed w-full top-0 left-0 shadow z-40">
        <div className="container flex justify-between items-center mx-auto p-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
          <div className="flex justify-center items-center">
            <div className="flex items-stretch">
              <div className="hidden sm:flex items-center p-2 bg-white/90 rounded-l-[8px]">
                <SlCallOut />
              </div>

              <div className="hidden sm:flex items-center p-2 bg-white/70 rounded-r-[8px]">
                +880-1894-801-923
              </div>
            </div>
            <div className="cursor-pointer">
              {isLoggedIn ? (
                <Link to='/adminDashboard'>
                <div className="px-4 flex justify-center items-center">
                  <img
                     src={isLoggedIn ? profilePicUrl : ""}
                   
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                </Link>
              ) : (
                // <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                //   U
                // </div>
                <div></div>
              )}
            </div>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Open Menu"
              className="p-2 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* BACKDROP OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* SLIDE MENU */}
      <aside
        className={` 
  fixed top-0 right-0 h-full w-70 bg-black/30 shadow-xl z-40 
  backdrop-blur-sm
  transform transition-transform duration-300 
  ${open ? "translate-x-0" : "translate-x-full"} 
`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl text-white font-semibold font-bold">
            Contact Us
          </h2>

          <button onClick={toggleMenu} aria-label="Close Menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="pt-2 pb-14 text-white font-medium h-screen overflow-y-scroll scrollbar-hide">
           {isLoggedIn ? (
       

          <li onClick={logOut} className="border-b border-gray-300">
              <a onClick={toggleMenu} className="block py-4 px-4 hover:bg-white/20 transition">
                <div className="flex gap-2 justify-start items-center cursor-pointer"><p>Logout</p><IoIosLogOut size={18}/></div>
              </a>
            </li>
          ) : (
                   <Link to="/login"  onClick={toggleMenu}>
             <li className="group border-b border-gray-300">
              <p className="block py-4 px-4 hover:bg-white/20 transition">
                Login
              </p>
            </li>
          </Link>
              )}
          <Link to="/" onClick={toggleMenu} aria-label="Close Menu">
            <li className="group border-b border-gray-300">
              <p className="block py-4 px-4 hover:bg-white/20 transition">
                Home
              </p>
            </li>
          </Link>
          {/* NESTED MENU */}
          <li className="border-b border-gray-300">
            <button
              onClick={() => setOpenSub(!openSub)}
              className="w-full flex justify-between items-center py-4 px-4 hover:bg-white/20 transition"
            >
              <span>Our Concern</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openSub ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {/* Dropdown Items */}
            <ul
              className={`overflow-y-scroll scrollbar-hide ml-4 mt-1 overflow-auto transition-all duration-300 ${
                openSub ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
               <Link to="/northSouthConsortiumLtd" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                North South Consortium Ltd
              </li>
              </Link>
               <Link to="/greenCity" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Green City Ltd
              </li>
              </Link>
               <Link to="/industrialCity" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Industrial City
              </li>
              </Link>
              
               <Link to="/squareCity" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Square City
              </li>
              </Link>
              
               <Link to="/purbachalNirapadValley" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Purbachal Nirapad Valley
              </li>
              </Link>
               <Link to="/conceptDetails" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Duplex Home
              </li>
              </Link>
               <Link to="/northsouthFarmsLtd" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Farms Ltd
              </li>
              </Link>
               
               <Link to="/northsouthGarments" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Garments
              </li>
              </Link>
               <Link to="/northsouthToursTravels" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Tours & Travels
              </li>
              </Link>
               <Link to="/northsouthFoundation" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Foundation
              </li>
              </Link>
               <Link to="/northsouthButterfly" onClick={toggleMenu} aria-label="Close Menu">
              <li className="py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-sm">
                Northsouth Butterfly
              </li>
              </Link>
            </ul>
          </li>
          <Link to="/realEstate" onClick={toggleMenu} aria-label="Close Menu">
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Realestate
              </a>
            </li>
          </Link>
          <Link
            to="/bannerProject"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Project
              </a>
            </li>
          </Link>
          <Link to="/landWanted" onClick={toggleMenu} aria-label="Close Menu">
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Land Wanted
              </a>
            </li>
          </Link>
          <Link to="/newsEvent" onClick={toggleMenu} aria-label="Close Menu">
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                News & Event
              </a>
            </li>
          </Link>
          <Link
            smooth
            to="/aboutUs"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                About Us
              </a>
            </li>
          </Link>
          <Link
            smooth
            to="/career"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Career
              </a>
            </li>
          </Link>
          <HashLink
            smooth
            to="/#contact"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Contact
              </a>
            </li>
          </HashLink>
          <Link
            smooth
            to="/privacyPolicy"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <li className="border-b border-gray-300">
              <a className="block py-4 px-4 hover:bg-white/20 transition">
                Privacy Policy
              </a>
            </li>
          </Link>
          
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
