import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="w-full min-h-screen bg-sky-50">
      <App />
    </section>
  </React.StrictMode>
);
