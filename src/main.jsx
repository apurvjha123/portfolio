import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlayProvider } from "./contexts/Play";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PlayProvider>
      <App />
    </PlayProvider>
);
