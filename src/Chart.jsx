import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import Chart2 from './chart2';
const CustomLegend = ({ labels, colors }) => (
  <div style={{ display: 'flex',width: '393px', justifyContent: 'space-between', padding: '28px 10px 10px 10px' }}>
    {labels.map((label, index) => (
      <div key={label} style={{ display: 'flex', gap: '7px', alignItems: 'center', marginRight: '20px' }}>
        <div style={{ width: '12px', height: '12px', backgroundColor: colors[index], marginRight: '8px', borderRadius: '50%' }}></div>
        {label}
      </div>
    ))}
  </div>
);

const formatTime = (hours, minutes) => {
  return `${hours} h ${minutes} min`;
};

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        stacked: true,
        
        height: 182,
        width: 436,
        toolbar: {
          show: false, // Hide the toolbar menu
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '12px'
          
        },
        fill: {
          colors: ['#f00', '#33BFFF']
        }
  
      },
      dataLabels: {
        enabled: false,
        
      },
      
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        tickAmount: 7,
      },
      yaxis: {
        max: 10,
        tickAmount: 6, 
        labels: {
          // formatter: (value) => (value === 0 || value === 10  ? value : ''),
          formatter: (value) => (value === 0 || value === 10 ? `${value} h` : ''),

        },
        opposite: true, 
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      
      annotations: {
        yaxis: [
          {
            y: 5,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Average',
            },
          },
        ],
      },
      legend: {
        show: false,
        horizontalAlign: 'left',
        // position: 'top', // or 'bottom'
        itemMargin: {
        horizontal: 20, // adjust the value as needed
      },
      },
    };

    const series = [
      {
        name: 'Ghana',
        data: [1, 3, 1, 4, 3, 3, 2],
        color: '#1D4ED8',
      },
      {
        name: 'India',
        data: [2, 2, 1, 2, 1, 2, 3],
        color: '#33BFFF',
      },
      {
        name: 'Indonesia',
        data: [2, 3, 1.5, 1, 3.4, 2.3, 2.7],
        color: '#EC4899',
      },
      {
        name: 'Peru',
        data: [3, 1.5, 0.5, 2.5, 1.8, 1.1, 1.2],
        color: '#22C55E',
      },
    ];

    const chartOptions = { ...options, series };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();
    }
  }, []);
  const totalTimeGhana = 1 * 60 + 3 + 1 * 60 + 4 + 3 * 60 + 3 + 2; // convert hours to minutes
  const totalTimeIndia = 2 * 60 + 2 + 1 * 60 + 2 + 1 * 60 + 2 + 3;
  const totalTimeIndonesia = 2 * 60 + 3 + 1.5 * 60 + 1 + 3.4 * 60 + 2.3 + 2.7;
  const totalTimePeru = 3 * 60 + 1.5 + 0.5 * 60 + 2.5 + 1.8 * 60 + 1.1 + 1.2;
  return (
    <div className='chart'>
      <div className='chartdata' ref={chartRef}></div>

      <Chart2/>
      <CustomLegend labels={['Ghana', 'India', 'Indonesia', 'Peru']} colors={['#1D4ED8', '#33BFFF', '#EC4899', '#22C55E']} />
      <div className='chart-time'>
        <p>{formatTime(Math.floor(totalTimeGhana / 60), totalTimeGhana % 60)}</p>
        <p>{formatTime(Math.floor(totalTimeIndia / 60), totalTimeIndia % 60)}</p>
        <p>{formatTime(Math.floor(totalTimeIndonesia / 60), totalTimeIndonesia % 60)}</p>
        <p>41 min</p>
      </div>
      
    </div>
  );
};


export default Chart;
