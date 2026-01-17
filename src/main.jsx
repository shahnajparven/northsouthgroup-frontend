import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter >
    <ToastContainer
      position="top-center"
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      autoClose={1000}
    />
    <App />
  </BrowserRouter>
);
