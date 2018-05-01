import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label: 'Population',
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: ['rgb(1,2,3,.1)', 'yellow', 'blue', 'green', 'orange', 'purple'],
          },
          {
            label: 'Another Population',
            data: [121223,212334,4541233,345124,341254,812376],
          }
        ],
      },
      chartOptions: {
        title: {
          display: true,
          text: 'Largest Cities In Massachusetts',
          fontSize: 25,
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            fontColor: 'gray',
          },
        },
        layout: {
          padding: {
            top: 100,
            right: 100,
            bottom: 100,
            left: 100,
          },
        },
        animation: {
          duration: 5000,
        }

      }
    }
  }

  render() {
    return (
      <div>
        <Pie data={this.state.chartData} options={this.state.chartOptions} />
        <Bar data={this.state.chartData} options={this.state.chartOptions} />
        <Line data={this.state.chartData} options={this.state.chartOptions} />
        <Doughnut data={this.state.chartData} options={this.state.chartOptions} />
      </div>
    )
  }
}

export default Home