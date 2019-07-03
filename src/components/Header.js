import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header style={ headerStyle }>
                <nav>
                    <ul>
                        <li style={ liStyle }><Link to="/">Home</Link></li>
                        <li style={ liStyle }><Link to="/about">About</Link></li>
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
    margin: '0 15px',
    marginTop: '15px',
    padding: '0 15px',
    borderRadius: '30px 30px 30px 30px',
}

const liStyle = {
    display: 'inline-block',
    padding: '15px'
}

export default Header;