import React, { useRef, useEffect } from 'react';
import {Chart} from 'chart.js/auto';
import "./piechart.scss";
const data = {
    labels: ['Gearbox oil change', 'Fuel indicator issue', 'Electronics glitches', 'Tyres replacement', 'Shock change', 'Engine Oil change', 'Brake hydraulic issue', 'Engine clutch issue', 'Brake disc worn out', 'Steering issues'],
    datasets: [
      {
        label: '# of failures',
        data: [12, 16, 12, 21, 16, 15, 21, 14, 22, 18],
        backgroundColor: [
            '#F9E6E2','#F5D3D1','#F1BDC1','#ECA0B3','#E57CA5','#D55A9A','#BB3B8A','#9A277D','#781C74','#551469'
        ],
        borderWidth: 0,
      },
    ],
  };
  const CircleChartLabel = ({ label, value, backgroundColor }) => (
    <div className="CircleChartLabel">
      <span
        className="CircleChartIndicator"
        style={{ backgroundColor }}
      />
      <span className="CircleChartLabelText">
        {label}: {value}
      </span>
    </div>
  );
  

const CircleChart = () => {
    const chartRef = useRef();
  
    useEffect(() => {
      const myChartRef = chartRef.current.getContext('2d');
  
     
      new Chart(myChartRef, {
        type: 'doughnut',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false
            },
            centerText: {
              display: true,
              text: '167 total failures',
              color: '#333',
              fontStyle: 'bold',
              fontSize: 20
            }
          },
          layout: {
            padding: 20
          }
        }
      });
    }, []);
  
    return (
      <div className='ChartOuterBox'>
      <div className='ChartTitle'>Top 10 Most Frequent Failures</div>
      <div className='CircleChartBox'>
        <div className='CircleChartLabels'>
        
        {data.labels.map((label, index) => (
          <>
          <div className='LabelSection'>
          <div style={{backgroundColor:`${data.datasets[0].backgroundColor[index]}`,width:"20px",height:"20px",margin:"3px"}}></div><div className='LabelName'>{label} : {data.datasets[0].data[index]}</div>
          </div>
          </>
        ))}

        </div>
        <canvas ref={chartRef} width={300} height={300} />
      </div>
      </div>
    );
  };
export default CircleChart;
