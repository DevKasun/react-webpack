import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
//import cbr from './../public/assets/img/cbr.jpg';
import About from './pages/About';

class App extends Component {
    render() {
        return(
            <Router>
                <div id="App">
                    <Header />
                    <Route exact path="/" render={ props => (
                        <React.Fragment>
                            <h1>My Webpack React App</h1>
                        </React.Fragment>
                    ) } />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App;