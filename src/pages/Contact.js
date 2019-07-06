import React, { Component } from 'react';
import devkasun from '../../public/assets/img/devkasun.jpg';
import { Link } from 'react-router-dom'; 


class Contact extends Component {
    render() {
        return (
            <section className="about">
                <div className="background-layer darker">
                    <div className="container">
                        <div className="grid-container about">
                            <div>
                                <div className="img-wrapper">
                                    <img className="profile" src={devkasun} alt="devkaun's image"/>
                                </div>
                            </div>
                            <div>
                                <h3>Who is this guy?</h3>
                                <p>
                                   Hey, my name is Kasun Lakshitha. I'm a front-end web developer who has 2 year eperience in field. Code for fun and part time work as a freelancer. Look out my github account also. Focus on clean, elegant and efficient code.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;