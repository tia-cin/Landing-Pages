import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import {
  Project1,
  Project10,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
} from "./templates";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/templates" element={<Projects />} />
        <Route path="/templates/project-1" element={<Project1 />} />
        <Route path="/templates/project-2" element={<Project2 />} />
        <Route path="/templates/project-3" element={<Project3 />} />
        <Route path="/templates/project-4" element={<Project4 />} />
        <Route path="/templates/project-5" element={<Project5 />} />
        <Route path="/templates/project-6" element={<Project6 />} />
        <Route path="/templates/project-7" element={<Project7 />} />
        <Route path="/templates/project-8" element={<Project8 />} />
        <Route path="/templates/project-9" element={<Project9 />} />
        <Route path="/templates/project-10" element={<Project10 />} />
        {/* <Route path="/templates/project-11" element={<Project11 />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
