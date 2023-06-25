import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TwoLinesChart = ({ selectedMonth }) => {
    const [chartOptions, setChartOptions] = useState({
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        chart: {
            height: 130,
            borderRadius: 20
        },
        series: []
    });

    useEffect(() => {
        // Dummy data for each month
        const data = {
            '1': {
                guest: [1, 3, 2, 4, 2.5],
                user: [2, 1, 4, 3, 1.2]
            },
            '2': {
                guest: [2, 4, 1, 3, 2.8],
                user: [1, 2, 3, 4, 2.5]
            },
            '3': {
                guest: [3, 1, 4, 2, 1.7],
                user: [4, 3, 2, 1, 2.2]
            }
        };

        // Update the chart options based on the selected month
        setChartOptions({
            ...chartOptions,
            series: [
                {
                    name: 'Guest',
                    data: data[selectedMonth].guest,
                    color: '#E9A0A0'
                },
                {
                    name: 'User',
                    data: data[selectedMonth].user,
                    color: '#9BDD7C'
                }
            ]
        });
    }, [selectedMonth]);

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default TwoLinesChart;
