import React, { Component } from 'react';
import Charts from './../components/Charts';
import Table from '../components/tables/Table';

class Components extends Component {
    render() {
        return (
            <div className="components">
                <div className="background-layer darker">
                    <div className="container">
                        <Charts /> 
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}

export default Components
