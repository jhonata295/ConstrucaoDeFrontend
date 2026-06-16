import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD

import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
=======
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
  </React.StrictMode>
);