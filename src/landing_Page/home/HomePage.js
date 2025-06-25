import React from 'react';
import Hero from "./Hero";
import Awards from "./awards";
import Stats from "./stats";
import Education from "./Education";
import PricingCompo from "./PricingCompo"
import OpenAccount from "../OpenAccount";



function HomePage() {
    return ( 
        <>
        
        <Hero />
        <Awards/>
        <Stats/>
        <PricingCompo/>
        <Education/>
        <OpenAccount/>
        
        </>
     );
}

export default HomePage;