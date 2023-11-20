import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const IndonesiaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'Inflation',
        data: [10.3, 8.1, 9.0, 10.1, 5.0, 6.6, 7.2, 4.3, 9.4, 5.8, 7.5, 4.2],
      }],
      chart: {
        height: 200,
        width: 250,
        type: 'bar',
        toolbar: {
            show: false, // Hide the toolbar menu
          },
      },
      colors: '#fff',
      plotOptions: {
        bar: {
            columnWidth: 5,
            borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"],
        },
      },
      xaxis: {
        
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
            show: false,
          },
        
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
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

export default IndonesiaChart;
