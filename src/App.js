import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
//import cbr from './../public/assets/img/cbr.jpg';
import Cover from './components/Cover';
import Whatwedo from './components/Whatwedo';
import Tech from './components/Tech';
import Contact from './pages/Contact';

class App extends Component {
    render() {
        return(
            <Router>
                <div id="App">
                <main>
                    <Header />
                    <Route exact path="/" render={ props => (
                        <React.Fragment>
                            <Cover />
                            <Whatwedo />
                            <Tech />
                        </React.Fragment>
                    ) } />
                    <Route path="/about" component={ Contact } />
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;