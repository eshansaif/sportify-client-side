import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import axios from "axios";

// Globally used baseURL with JWT
axios.defaults.baseURL = "https://sportify-backend-side.vercel.app";

let token = localStorage.getItem("token") || "";
token = token && `Bearer ${token}`;

axios.defaults.headers.common["Authorization"] = token;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
