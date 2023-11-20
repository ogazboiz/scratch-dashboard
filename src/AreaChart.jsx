import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import "./AreaChart.css"
const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
        chart: {
            
            type: 'area',
            width:360,   
            height: 82,
            sparkline: {
              enabled: true
            },
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0,
              stops: [0, 90, 100],
            },
          },
          series: [{
            name: '',
            data: [30, 40, 25, 50, 49, 21, 70, 51, 60,30,65,25,75,20,10,14,24,41,35,38,45,47,30,20,15],
          }],
    
          labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
          yaxis: {
            min: 0
          },
          xaxis: {
            type: 'datetime',
          },
          colors: ['#22C55E'],
        }

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, []);

  return (
      <div className='area-chart' ref={chartRef}></div>
   
  );
};

export default AreaChart;
