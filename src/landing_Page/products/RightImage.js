import React from 'react';
function RightImage({imageUrl, productName, productDescription, learnMore}) {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-6 p-5 mt-3 mb-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} >Try Demo</a>
                </div>
                <div className="col-6 mt-5">
                    <img src={imageUrl} alt=" img" />
                </div>
            </div>
        </div>
    );
}

export default RightImage;