import React from 'react';
//import ProfilePic from '../../public/assets/img/profileNew.jpg';


function Cover() {
    return (
        <div className="cover-section">
            <div className="background-layer">
                <div className="container">
                    <div className="profile-grid">
                        <div>
                            <h1>
                                <span>DEV</span>
                                <span>ELO</span>
                                <span>PER</span>
                            </h1>
                        </div>
                        <div>
                            <h3>Kasun Lakshitha ('-')_/</h3>
                            <p>
                                Hey, I'm a frontend web developer who has crazy ideas. Checkout my latest updates on y social media accounts. Learn, Code and Repeat.
                            </p>
                            
                            <div className="cover-social-icons">
                                <span className="fb"></span>
                                <span className="tw"></span>
                                <span className="insta"></span>
                                <span className="github"></span>
                                <span className="linkedin"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;