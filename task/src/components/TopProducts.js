import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class TopProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '1'
        };
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    render() {
        const { selectedOption } = this.state;

        const data = {
            '1': [
                { name: 'Basic Tees', y: 55 },
                { name: 'Custom Short Pants', y: 31 },
                { name: 'Super Hoodies', y: 14 }
            ],
            '2': [
                { name: 'Basic Tees', y: 42 },
                { name: 'Custom Short Pants', y: 28 },
                { name: 'Super Hoodies', y: 30 }
            ],
            '3': [
                { name: 'Basic Tees', y: 18 },
                { name: 'Custom Short Pants', y: 35 },
                { name: 'Super Hoodies', y: 47 }
            ]
        };

        const selectedData = data[selectedOption];

        const options = {
            credits: {
                enabled: false
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 128,
                width: 440,
                spacing: [0, 0, 0, 0],
                alignTicks: false,
                margin: 0,
                groupPadding: 0,
                pointPadding: 0,
                marginLeft: 0,
                marginRight: 0,
                borderRadius: 20
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                center: ["0%", "0%"],
                pie: {
                    size: '50%'
                },
                dataLabels: {
                    enabled: false,
                    connectorWidth: 0
                },
                showInLegend: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            series: [{
                name: '',
                colorByPoint: true,
                data: selectedData
            }]
        };

        return (
            <div className="fourthLeft">
                <div className="Top-Products">
                    <p className="activities" style={{ marginTop: 0 }}>
                        Top Products
                    </p>
                    <div>
                        <select name="select" id="select" value={selectedOption} onChange={this.handleChange}>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                        </select>
                    </div>
                </div>
                <div id="pie">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </div>
        );
    }
}

export default TopProducts;
