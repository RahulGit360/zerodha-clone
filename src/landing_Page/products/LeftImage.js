import React from 'react';
function LeftImage({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageUrl} alt=" img" />
                </div>
                <div className="col-6 p-5 mt-3 mb-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                    <a href={tryDemo} >Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay} ><img src="/media/images/googlePlayBadge.svg" alt='goog logo'></img></a>
                    <a href={appStore} style={{marginLeft:"50px"}} ><img src="/media/images/appstoreBadge.svg" alt='goog logo'></img></a>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default LeftImage;