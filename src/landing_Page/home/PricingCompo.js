import React from 'react';
function PricingCompo() {
    return (
        <div className='container px-3'>
            <div className='container'>
            <div className='container my-5'>
  <div className='row align-items-start'>
    {/* Left Text Block */}
    <div className='col-md-3'>
      <h2 className='fw-semibold mb-3'>Unbeatable pricing</h2>
      <p className='mb-3'>
        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
      </p>
      <a href='./Pricing.js' className='text-primary text-decoration-none'>
        See pricing &rarr;
      </a>
    </div>

    {/* Right Pricing Icons */}
    <div className='col-md-9'>
      <div className='d-flex justify-content-center gap-5 text-center'>
        <div>
          <img src='media/images/zero.svg' alt='₹0' className='img-fluid mb-2' style={{ maxHeight: '56px' }} />
          <div className='mt-2'>Free account opening</div>
        </div>
        <div>
          <img src='media/images/zero.svg' alt='₹0' className='img-fluid mb-2' style={{ maxHeight: '56px' }} />
          <div className='mt-2'>Free equity delivery and direct mutual funds</div>
        </div>
        <div>
          <img src='media/images/20.svg' alt='₹20' className='img-fluid mb-2' style={{ maxHeight: '56px' }} />
          <div className='mt-2'>Intraday and F&amp;O</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        </div>
    );
}


export default PricingCompo;