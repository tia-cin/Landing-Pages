import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="w-full p-0 m-0 bg-light-gray text-black">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
