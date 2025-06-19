import React from 'react';
function Pricing() {
    return (
        <div className='container px-3'>
            <div className='row'>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>
            <div className='row text-center mt-5 mb-4'>
                <div className='col-md-4 mb-4'>
                    <img src='media/images/zero.svg' alt='zer' className='img-fluid mb-3' />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-md-4 mb-4'>
                    <img src='media/images/20.svg' alt='zer' className='img-fluid mb-3' />
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-md-4 mb-4'>
                    <img src='media/images/zero.svg' alt='zer' className='img-fluid mb-3' />
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}


export default Pricing;