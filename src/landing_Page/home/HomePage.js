import React from 'react';
import Hero from "./Hero";
import Awards from "./awards";
import Stats from "./stats";
import Education from "./Education";
import Pricing from "./pricing"

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";


function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Navbar/>
        <Footer/>
        </>
     );
}

export default HomePage;