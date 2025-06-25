import React from 'react';

function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "40%" }} />
          <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col">
          <h5>Company</h5>
          <a href="/about">About</a><br />
          <a href="/products">Products</a><br />
          <a href="/pricing">Pricing</a><br />
          <a href="/referral">Referral program</a><br />
          <a href="/careers">Careers</a><br />
          <a href="/tech">Zerodha.tech</a><br />
          <a href="/media">Press & media</a><br />
          <a href="/csr">Zerodha cares (CSR)</a><br />
        </div>

        <div className="col">
          <h5>Support</h5>
          <a href="/contact">Contact</a><br />
          <a href="/support">Support portal</a><br />
          <a href="/blog">Z-Connect blog</a><br />
          <a href="/charges">List of charges</a><br />
          <a href="/downloads">Downloads & resources</a><br />
        </div>

        <div className="col">
          <h5>Account</h5>
          <a href="/open-account">Open an account</a><br />
          <a href="/fund-transfer">Fund transfer</a><br />
          <a href="/challenge">60 day challenge</a><br />
        </div>
      </div>

      <div className="mt-5 text-small text-muted">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633...<br />
          ...<br />
          Investments in securities market are subject to market risks...
        </p>
        <p>
          NSE BSE MCX | Terms & conditions | Privacy policy | Investor charter
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
