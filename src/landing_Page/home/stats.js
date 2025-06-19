import React from 'react';

function Stats() {
    return (
        <div className="container mb-5 p-5">
            <div className="row">
                <div className="col-6" p-5>
                    <div className="trust-section">
                        <h2 fs-4>Trust with confidence</h2>

                        <div className="trust-point mt-4">
                            <h4 className='fs-4'>Customer-first always</h4>
                            <p className='text-muted'>
                                That’s why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4 className='fs-4'>No spam or gimmicks</h4>
                            <p className='text-muted'>
                                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. 
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4 className='fs-4'>The Zerodha universe</h4>
                            <p className='text-muted'>
                                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4 className='fs-4'> Do better with money</h4>
                            <p className='text-muted'>
                                With initiatives like <em>Rainmatter</em> and <em>Varsity</em>, we don’t just facilitate transactions, but actively help you do better with your money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6" p-5>
                    <img src='media/images/ecosystem.png' className='img-fluid' alt='Ecosystem'/>
                </div>
            </div>
        </div>
    );
}

export default Stats;
