import React from "react";

function Hero(){
    return(
        <div className="container-fluid  text-white " id="supportHero">
            <div className="p-3 " id="supportWrapper">
                <h3 className="fs-4">Support Portal</h3>
                <a href="/reo">Track Ticket</a>  
            </div>
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1  className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg:How to Activate F&O"></input> <br/>
                    <a href="/te">Track account opening</a>
                    <a href="/te">Track segment activation</a>
                    <a href="/te">Intraday margins</a> 
                    <a href="/te">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-4">Featured</h1>
                    <ol>
                        <li><a  href="/tes">Surveillance measure on scrips - June 2025</a></li>
                        <li><a  href="/tes">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>

            </div>
        </div>
    );
}
export default Hero;