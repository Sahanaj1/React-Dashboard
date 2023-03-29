import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js';

function LineGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#1f64cc',
            lineTension: 0.3
          }
        ]
      },
      options: chartOptions
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default LineGraph;
