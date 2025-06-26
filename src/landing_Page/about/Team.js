import React from 'react';
function Team() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center">people</h1>

            </div>
            <div className="row p-5 mt-5 text-muted text-center">
            <div className="col-6">
            <img src='media/images/naruto.jpeg' alt='naruto' className='mb-5' style={{borderRadius:"250%",
                width:"60%"
            }} />
            <h4 className="mt-5">Rahul S</h4>
            <h5>Founder of this clone website</h5>
            </div>
            <div className="col-6">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
            </div>
            
        </div>
     );
}

export default Team;