import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import "./DoughnutChart.css"

const CustomLegend = ({ data }) => {
  return (
    <div className="custom-legend">
      {data.map((item, index) => (
        <div key={index} className="legend-item">
          <span className="legend-marker" style={{ backgroundColor: item.color }}></span>
          <span className="legend-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'donut',
        width: 300,
        height:200,
       
      },
      labels: ['WhatsApp', 'Instagram', 'Telegram'],
      colors: ['#7E22CE', '#D8B4FE', '#DBEAFE'], 
      plotOptions: {
        pie: {
          donut: {
            size: '112px',
            labels:{
              show: true,
              total:{
                showAlways: true
                // show:true
              }
            }
          },
          stroke: {
            // color: 'transparent', // Set stroke color to transparent
            width: 0,
            color: null,
          },
        },
      },
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        height: 30,
        margin:100,
        formatter: function (seriesName) {
          return seriesName;
        },
      },
      dataLabels: {
        enabled: false, // Set to false to hide data labels
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    const series = [50, 30, 20];

    const chartOptions = { ...options, series };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();
    }
  }, []);

  const legendData = [
    { label: 'WhatsApp', color: '#7E22CE' },
    { label: 'Instagram', color: '#D8B4FE' },
    { label: 'Telegram', color: '#DBEAFE' },
  ];

  return (
    <div className='dougnut-inner'>
      <div  className='dougnut-chart' ref={chartRef}></div>
      <CustomLegend data={legendData} />
      {/* <div className="center-text">Your Text Here</div> */}
    </div>
  );
};

export default DoughnutChart;
