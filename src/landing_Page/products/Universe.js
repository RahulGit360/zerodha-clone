import React from 'react';
function Universe() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row">
                <div className="col-4 p-3">
                    <img className="logo-image" src="/media/images/zerodhaFundhouse.png" alt='smallcaseL'/>
                    <p className="text-small text muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img src="/media/images/sensibullLogo.svg" alt=''/>
                    <p className="text-small text muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/images/smallcaseLogo.png" alt=''/>
                    <p className="text-small text muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    <img src="/media/images/smallcaseLogo.png" alt=''/>
                    <p className="text-small text muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs </p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/images/smallcaseLogo.png" alt=''/>
                    <p className="text-small text muted">Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.</p>
                    <img className="logo-image" src="/media/images/dittoLogo.png" alt=''/>
                    <p className="text-small text muted mt-5">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            <div className="row">
                <button className = 'p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto" }}>Sign up for free</button>
            </div>

        </div>
     );
}

export default Universe;