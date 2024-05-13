import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Testimonials from "./Components/Testimonials/Testimonials";
import Grid from "./Components/Grid/Grid";
import Footer from "./Components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex flex-col items-center justify-center">
    <Header />
    <Hero />
    <Main />
    <Testimonials />
    <Grid />
    <Footer/>
  </div>,
);
