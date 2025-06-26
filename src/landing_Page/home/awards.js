import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-start">
                {/* LEFT COLUMN: Image */}
                <div className="col-md-6 mb-5">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="Largest Broker Award"
                
                    />
                </div>

                {/* RIGHT COLUMN: Trust Content */}
                <div className="col-md-6">
                    <div className="trust-section">
                        <h2>Trust with confidence</h2>

                        <div className="trust-point mt-4">
                            <h4>Customer-first always</h4>
                            <p>
                                That’s why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4>No spam or gimmicks</h4>
                            <p>
                                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. 
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4>The Zerodha universe</h4>
                            <p>
                                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                            </p>
                        </div>

                        <div className="trust-point mt-3">
                            <h4>Do better with money</h4>
                            <p>
                                With initiatives like  and , we don’t just facilitate transactions, but actively help you do better with your money.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
