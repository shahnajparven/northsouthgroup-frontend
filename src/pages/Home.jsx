import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import "../index.css";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";


import Consortium from "./consortium/Consortium";
import Project from "./project/Project";
import Concept from "./concept/Concept";
import About from "./about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./contact/Contact";
import Testimonials from "./testimonials/Testimonials";
import Partners from "./partners/Partners";
import Video from "../components/Video";
import Meeting from "./meeting/Meeting";
import { motion } from "framer-motion";

const Home = () => {


  useEffect(() => {
     AOS.init({ duration: 800 });
    //  AOS.init({ duration: 2000, easing: "ease-out-cubic" });
  }, []);



  return (
    <Box overflow='hidden'> 
    <Banner  slides={[hero1, hero2, hero3]}
      buttons={[
        { text: "REAL ESTATE", link: "/realEstate" },
        { text: "PROJECT", link: "/bannerProject" },
        { text: "LAND WANTED", link: "/landWanted" },
      ]}/>
       <About/>
    <Consortium/>
   <Testimonials/>
    <Project/>
    <Concept/>
    <Meeting/>
    <Video/>
    <Partners/>
    <Contact/>
    
    </Box>
  )
}

export default Home