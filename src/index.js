import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Import BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
 <React.StrictMode>
 {/* Wrap the App component in BrowserRouter */}
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </React.StrictMode>,
 document.getElementById("root")
);