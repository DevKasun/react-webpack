import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <h1>My Webpack React App</h1>
            </div>
        )
    }
}

export default App;