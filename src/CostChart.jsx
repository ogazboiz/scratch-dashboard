import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const colors = ['#22C55E','#A855F7', '#33BFFF'];

    const options = {
      series: [{
        data: [21, 22, 10,]
      }],
      chart: {
        height: 171,
        type: 'bar',
        toolbar: {
            show: false, // Hide the toolbar menu
          },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '8%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'right', // Set the legend position to the right
        offsetY:  78,
        offsetX: 10,},
        markers: {
            width: 8,
            height: 8,
          },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
        ],
        axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
        labels: {
          show: false,
      },
    },
      yaxis: {
        show: true, // Show the y-axis line
        labels: {
          style: {
            colors: '#B8BFCC',
            fontSize: '12px'
          },
        },
      },
      grid: {
        show: false, // Hide the grid lines
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default MyChart;
