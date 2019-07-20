import React, { Component } from 'react';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import DoughnutChart from './charts/DoughnutChart';
import LineChart from './charts/LineChart';

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData : {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Something',
                    data: [65, 19, 30, 5, 20, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    }

    render() {
        return (
            <div className="chart">  
                <BarChart chartData={this.state.chartData} />
                <PieChart chartData={this.state.chartData} />
                <LineChart chartData={this.state.chartData} />
                <DoughnutChart chartData={this.state.chartData} />
            </div>
        )
    }
}

export default Charts;
