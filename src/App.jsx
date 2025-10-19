import React from "react";
import Header from "./compnents/Header";
import About from "./compnents/About";
import Projects from "./compnents/Projects";
import Testimonials from "./compnents/Testimonials";
import Contact from "./compnents/Contact";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./compnents/Footer";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
