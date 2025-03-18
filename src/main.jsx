import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserMessagesProvider } from "./context/UserMessagesContext"; // Import the provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserMessagesProvider>
    <App />
  </UserMessagesProvider>
);
