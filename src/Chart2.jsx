import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Chart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        height: 182,
        width: 436,
        stacked: true,
        
        toolbar: {
            show: false, // Hide the toolbar menu
          },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%', // Adjust this value for the width of each group
          startingShape: 'flat',
          endingShape: 'flat',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
      },
      yaxis: {
        opposite: true, 
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        show: false,
        horizontalAlign: 'left',
        position: 'top',
        offsetY: 0,
        offsetX: 0,
      },
    };

    const series = [
      {
        name: 'Ghana',
        data: [0,0,0,0,0,0,0,0,0,0,1, 3, 1, 4],
        color: '#1D4ED8',
      },
      {
        name: 'India',
        data: [0,0,0,0,0,0,0,0,0,0,2, 2, 1, 2],
        color: '#33BFFF',
      },
      {
        name: 'Indonesia',
        data: [0,0,0,0,0,0,0,0,0,0,2, 3, 1.5, 1],
        color: '#EC4899',
      },
      {
        name: 'Peru',
        data: [0,0,0,0,0,0,0,0,0,0,3, 1.5, 0.5, 2.5],
        color: '#22C55E',
      },
    ];
    

    const chartOptions = { ...options, series };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();
    }
  }, []);

  return (
      <div className='chartdata2' ref={chartRef}></div>
  );
};

export default Chart2;
