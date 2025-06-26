import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import PricingCompo from '../home/PricingCompo';
function Pricing() {
    return ( 
        <>
        <Hero/>
        <PricingCompo/>
        <Brokerage/>
        </>
     );
}

export default Pricing;