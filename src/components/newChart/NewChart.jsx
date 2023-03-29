import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./newChart.scss"

function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        // Add your data here
        labels: ["TATA 191.8K", "TATA HVYA 2518", "TATA LPK 3118", "TATA Prima 2518", "TATA 5530", "Tata FL 5589", "TATA 2456", "Site 8"],
        datasets: [
          {
            label: "Cost ",
            data: [60, 20, 30, 40, 50, 60, 70, 80],
            backgroundColor: "#5575A2",
            barThickness: 10
          },
          {
            label: "No of breakdowns",
            data: [40, 45, 25, 35, 45, 55, 65, 75],
            backgroundColor: "#E39142",
            barThickness: 10
          },
          {
            label: "Fuel Consumption",
            data: [15, 10, 35, 45, 55, 65, 75, 85],
            backgroundColor: "#CF605C",
            barThickness: 10
          }
        ]
      },
      options: {
        // Add your options here
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return (
    <div className='BarChatBox'>
      <span className='Quantity'>Quantity</span>
      <canvas ref={chartRef} />
    </div>
  );
}

export default BarChart;