import React from "react";
import './Ticket.css';
function CreateTicket(){
    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 text-start ">
                <h1 className="fs-5 ">To create a ticket, select a relevant topic</h1>
                </div>
            </div>
            <footer className="row footer-grid">
  
  <section className="col-4 p-3 mt-3 mb-3" >
    <h4>Account Opening</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled">
      <li><a href="re">Resident Individual</a></li>
      <li><a href="re">Minor</a></li>
      <li><a href="re">NRI</a></li>
      <li><a href="re">Company, HUF, LLP</a></li>
      <li><a href="re">Glossary</a></li>
    </ul>

    <h4>Funds</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled" >
      <li><a href="re">Add money</a></li>
      <li><a href="re">Withdraw money</a></li>
      <li><a href="re">Add bank accounts</a></li>
      <li><a href="re">eMandates</a></li>
    </ul>
  </section>

  
  <section className="col-4 p-3 mt-3 mb-3">
    <h4>Your Zerodha Account</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled">
      <li><a href="re">Your Profile</a></li>
      <li><a href="re">Account modification</a></li>
      <li><a href="re">Client Master Report</a></li>
      <li><a href="re">Nomination</a></li>
      <li><a href="re">Transfer of securities</a></li>
    </ul>

    <h4>Console</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled">
      <li><a href="re">Portfolio</a></li>
      <li><a href="re">Corporate actions</a></li>
      <li><a href="re">Reports</a></li>
      <li><a href="re">Profile</a></li>
      <li><a href="re">Segments</a></li>
    </ul>
  </section>


  <section className="col-4 p-3 mt-3 mb-3">
    <h4>Kite</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled">
      <li><a href="re">IPO</a></li>
      <li><a href="re">Trading FAQs</a></li>
      <li><a href="re">MTF and Margins</a></li>
      <li><a href="re">Charts and orders</a></li>
      <li><a href="re">Alerts and Nudges</a></li>
    </ul>

    <h4>Coin</h4>
    <ul className="d-flex flex-column gap-2 list-unstyled">
      <li><a href="re">Mutual Funds</a></li>
      <li><a href="re">NPS</a></li>
      <li><a href="re">Features on Coin</a></li>
      <li><a href="re">Payments and Orders</a></li>
      <li><a href="re">General</a></li>
    </ul>
  </section>
</footer>
        </div>

    );
}
export default CreateTicket;