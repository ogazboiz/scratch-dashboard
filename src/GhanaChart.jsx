import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const GhanaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      }],
      chart: {
        height: 200,
        width: 250,
        type: 'bar',
        toolbar: {
            show: false, // Hide the toolbar menu
          },
      },
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

export default GhanaChart;
