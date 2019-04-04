import React, { Component } from "react";
import Chart from "chart.js";

class Graph extends Component {
  componentDidMount() {
    this.makeGraph()
  }

  makeGraph() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Object.keys(this.props.info),
        datasets: [
          {
            label: "Bitcoin",
            data: Object.values(this.props.info),
            backgroundColor:
              [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
            borderColor:
              [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],

            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" width="250" height="250" />
      </div>
    );
  }
};

export default Graph;
