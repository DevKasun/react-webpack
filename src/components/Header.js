import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header style={ headerStyle }>
                <nav>
                    <ul>
                        <li style={ liStyle }><NavLink to="/"><strong>Home</strong></NavLink></li>
                        <li style={ liStyle }><NavLink to="/components"><strong>Components</strong></NavLink></li>
                        <li style={ liStyle }><NavLink to="/about"><strong>About me</strong></NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

const headerStyle = {
    textAlign: 'right',
    backgroundColor: '#3d3d3d',
    //color: '#fff',
    padding: '0 15px',
    borderRadius: '30px 30px 30px 30px',
    border: '1px solid #E91E63'
}

const liStyle = {
    display: 'inline-block',
    padding: '15px'
}

export default Header;