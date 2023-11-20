import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const PeruChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'Inflation',
        data: [7.3, 6.1, 8.0, 10.1, 7.0, 6.6, 9.2, 8.3, 5.4, 9.8, 7.5, 8.2, 10.0],
      }],
      chart: {
        height: 140,
        width: 140,
        type: 'bar',
        toolbar: {
            show: false, // Hide the toolbar menu
          },
      },
      colors: '#A855F7',
      plotOptions: {
        bar: {
            columnWidth: 3,
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
          colors: ["#304758"],
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
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#60A5FA',
              colorTo: '#BFDBFE',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
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

export default PeruChart;
