import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({chartData}) => {
    return (
        <div className="chart-container" style={chartContainer}>
            <Pie
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Bar char',
                        fontSize: 24
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        paddingTop: 30
                    }
                }}
            />
        </div>
    )
}

const chartContainer = {
    padding: '25px 0'
}

export default PieChart;
