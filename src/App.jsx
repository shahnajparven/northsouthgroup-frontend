import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import HeroPage from "./pages/HeroPage";
import "flowbite";
import ConsortiumDetails from "./pages/consortium/ConsortiumDetails";
import ConceptDetails from "./pages/concept/ConceptDetails";
import Footer from "./pages/Footer";
import RealEstate from "./pages/realstate/RealEstate";
// import RealEstateProjects from "./pages/realstate/RealEstateProjects";
import LandWanted from "./pages/landwanted/LandWanted";
import BannerProject from "./pages/bannerprojects/BannerProject";
import GreenCity from "./pages/bannerprojects/GreenCity";
import SquareCity from "./pages/bannerprojects/SquareCity";
import IndustrialCity from "./pages/bannerprojects/IndustrialCity";
import AboutUs from "./pages/about/AboutUs";
import Career from "./pages/career/Career";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NewsEvent from "./pages/newsEvent/NewsEvent";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Login from "./pages/user/Login.jsx";
import { toast } from "react-toastify";
import { useAuthStore } from "./store/auth/authStore";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { Navbar } from "flowbite-react";
import ProtectedRoute from "./route/ProtectedRoute";
import CreateProject from "./pages/admin/projects/createProject";
import UpdateProject from "./pages/admin/projects/UpdateProject";
import ViewProjects from "./pages/admin/projects/ViewProjects.jsx";
import ViewDashboard from "./pages/admin/ViewDashboard";
import ProjectDetails from "./pages/admin/projects/ProjectDetails";
import CreateNewsEvent from "./pages/admin/newsEvent/CreateNewsEvent";
import ViewNewsEvents from "./pages/admin/newsEvent/ViewNewsEvents";
import UpdateNewsEvents from "./pages/admin/newsEvent/UpdateNewsEvents";
import NewsEventDetails from "./pages/admin/newsEvent/NewsEventDetails";
import CreateGreenCity from "./pages/admin/bannerProjects/CreateGreenCity";
import CreateSquareCity from "./pages/admin/bannerProjects/CreateSquareCity";
import CreateIndustrialCity from "./pages/admin/bannerProjects/CreateIndustrialCity";
import ViewGreenCity from "./pages/admin/bannerProjects/ViewGreenCity";
import ViewSquareCity from "./pages/admin/bannerProjects/ViewSquareCity";
import ViewIndustrialCity from "./pages/admin/bannerProjects/ViewIndustrialCity";
import UpdateGreenCity from "./pages/admin/bannerProjects/UpdateGreenCity";
import UpdateSquareCity from "./pages/admin/bannerProjects/UpdateSquareCity";
import UpdateIndustrialCity from "./pages/admin/bannerProjects/UpdateIndustrialCity";
import NorthSouthConsortiumLtd from "./pages/ourConcern/NorthSouthConsortiumLtd.jsx";
import PurbachalNirapadValley from "./pages/ourConcern/PurbachalNirapadValley";
import NorthsouthFarmsLtd from "./pages/ourConcern/NorthsouthFarmsLtd";
import NorthsouthGarments from "./pages/ourConcern/NorthsouthGarments";
import NorthsouthToursTravels from "./pages/ourConcern/NorthsouthToursTravels";
import NorthsouthFoundation from "./pages/ourConcern/NorthsouthFoundation";
import NorthsouthButterfly from "./pages/ourConcern/NorthsouthButterfly";
import CreateReview from "./pages/admin/review/CreateReview";
import ViewReview from "./pages/admin/review/ViewReview.jsx";
import CreatePartners from "./pages/admin/partners/CreatePartners.jsx";
import ViewPartners from "./pages/admin/partners/ViewPartners.jsx";
import ViewContact from "./pages/admin/contact/ViewContact.jsx";
import UpdateContact from "./pages/admin/contact/UpdateContact.jsx";
import UpdateReview from "./pages/admin/review/UpdateReview.jsx";
import ReviewDetails from "./pages/admin/review/ReviewDetails.jsx";
import ContactDetails from "./pages/admin/contact/ContactDetails.jsx";
import UpdatePartners from "./pages/admin/partners/UpdatePartners.jsx";
import ViewPlotBooking from "./pages/admin/plotBooking/viewPlotBooking.jsx";
import Projects from "./pages/project/Projects.jsx";

function App({ scaling }) {
  const location = useLocation();

  // Determine if the current route is part of admin dashboard
  const isAdminRoute = location.pathname.startsWith("/adminDashboard");
  const { isLoading } = useAuthStore();

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     clearError();
  //   }

  //   if (message) {
  //     toast.success(message);
  //     clearMessage();
  //   }
  // }, [error, message, clearError, clearMessage]);

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <motion.div
            animate={{
              x: largeCircle.x - 32,
              y: largeCircle.y - 32,
              transition: { type: "spring", mass: 3 },
            }}
            className="large_circle"
            style={{ scale: scaling ? 0.1 : 1 }}
          />
          <motion.div
            animate={{
              x: smallcircle.x - 8,
              y: smallcircle.y - 8,
              transition: { type: "spring", mass: 2 },
            }}
            className="small_circle"
          />

          <ScrollToTop />
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HeroPage />}>
                <Route index element={<Home />} />
                <Route
                  path="/consortiumDetails/:id"
                  element={<ConsortiumDetails />}
                />
                <Route path="/conceptDetails" element={<ConceptDetails />} />
                <Route path="/realEstate" element={<RealEstate />} />
                {/* <Route
                  path="/realEstateProjects"
                  element={<RealEstateProjects />}
                /> */}
                 <Route
                  path="/projects"
                  element={<Projects />}
                />
                <Route path="/landWanted" element={<LandWanted />} />
                <Route path="/bannerProject" element={<BannerProject />} />
                <Route path="/greenCity" element={<GreenCity />} />
                <Route path="/squareCity" element={<SquareCity />} />
                <Route path="/industrialCity" element={<IndustrialCity />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/newsEvent" element={<NewsEvent />} />
                <Route
                  path="/newsEventDetails/:id"
                  element={<NewsEventDetails />}
                />

                <Route
                  path="/northSouthConsortiumLtd"
                  element={<NorthSouthConsortiumLtd />}
                />
                <Route
                  path="/purbachalNirapadValley"
                  element={<PurbachalNirapadValley />}
                />
                <Route
                  path="/northsouthFarmsLtd"
                  element={<NorthsouthFarmsLtd />}
                />
                <Route
                  path="/northsouthGarments"
                  element={<NorthsouthGarments />}
                />
                <Route
                  path="/northsouthToursTravels"
                  element={<NorthsouthToursTravels />}
                />
                <Route
                  path="/northsouthFoundation"
                  element={<NorthsouthFoundation />}
                />
                <Route
                  path="/northsouthButterfly"
                  element={<NorthsouthButterfly />}
                />                         

                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Route>

              {/* Admin Protected Route */}
              <Route
                path="/adminDashboard"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              >
                <Route path="viewDashboard" element={<ViewDashboard />} />
                <Route path="projectDetails/:id" element={<ProjectDetails />} />
                <Route path="createProject" element={<CreateProject />} />
                <Route path="updateProject/:id" element={<UpdateProject />} />
                <Route path="viewProjects" element={<ViewProjects />} />
                <Route path="createNewsEvent" element={<CreateNewsEvent />} />
                <Route path="viewNewsEvents" element={<ViewNewsEvents />} />
                <Route
                  path="updateNewsEvents/:id"
                  element={<UpdateNewsEvents />}
                />
                <Route
                  path="newsEventDetails/:id"
                  element={<NewsEventDetails />}
                />
                <Route path="createGreenCity" element={<CreateGreenCity />} />
                <Route path="createSquareCity" element={<CreateSquareCity />} />
                <Route
                  path="createIndustrialCity"
                  element={<CreateIndustrialCity />}
                />
                <Route path="viewGreenCity" element={<ViewGreenCity />} />
                <Route path="viewSquareCity" element={<ViewSquareCity />} />
                <Route
                  path="viewIndustrialCity"
                  element={<ViewIndustrialCity />}
                />
                <Route
                  path="updateGreenCity/:id"
                  element={<UpdateGreenCity />}
                />
                <Route
                  path="updateSquareCity/:id"
                  element={<UpdateSquareCity />}
                />
                <Route
                  path="updateIndustrialCity/:id"
                  element={<UpdateIndustrialCity />}
                />
                 <Route
                  path="createReview"
                  element={<CreateReview />}
                />
                 <Route
                  path="viewReview"
                  element={<ViewReview />}
                />
                <Route
                  path="updateReview/:id"
                  element={<UpdateReview />}
                />
                   <Route
                  path="reviewDetails/:id"
                  element={<ReviewDetails />}
                />
                
                 <Route
                  path="createPartners"
                  element={<CreatePartners />}
                />
                <Route
                  path="viewPartners"
                  element={<ViewPartners />}
                />
              <Route path="updatePartners/:id" element={<UpdatePartners />} />

                
                <Route
                  path="viewContact"
                  element={<ViewContact />}
                />
                <Route
                  path="updateContact/:id"
                  element={<UpdateContact />}
                />
                   <Route
                  path="contactDetails/:id"
                  element={<ContactDetails />}
                />
                 <Route
                  path="viewPlotBooking"
                  element={<ViewPlotBooking />}
                />
                
              </Route>
            </Routes>
          </Suspense>
          {/* Only show footer if NOT admin route */}
          {!isAdminRoute && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
