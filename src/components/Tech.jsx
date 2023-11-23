import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "../assets/scss/section/_chart.scss"

const Tech = () => {
  const [options, setOptions] = useState({
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690]
    }],
    chart: {
      type: 'bar',
      height: 380
    },
    plotOptions: {
      bar: {
        barHeight: '70%',
        distributed: true,
        horizontal: true,
        dataLabels: {
        position: 'bottom'
        },
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', 
            '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4'   
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Photoshop', 'Figma', 'CSS', 
                   'Swift', 'JAVASCRIPT', 'REACT', 'HTML']
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
      text: 'My Skills',
      align: 'center',
      floating: true
    },
    tooltip: {
      theme: 'light',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    },
  });

  return (
    <div id="chart" className='custum-chart'>
      <ReactApexChart options={options} series={options.series} type="bar" height={380} />
    </div>
  );
}

export default Tech;