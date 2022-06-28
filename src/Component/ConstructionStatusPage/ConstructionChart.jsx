import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import * as faker from "faker"
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function maxValue(ctx) {
    let max = 0;
    const dataset = ctx.chart.data.datasets[0];
    dataset.data.forEach(function(el) {
      max = Math.max(max, el);
    });
    return max;
  }
  
  function maxIndex(ctx) {
    const max = maxValue(ctx);
    const dataset = ctx.chart.data.datasets[0];
    return dataset.data.indexOf(max);
  }
  
  function maxLabel(ctx) {
    return ctx.chart.data.labels[maxIndex(ctx)];
  }

const annotation1 = {
    type: 'label',
    backgroundColor: '#C7D9FF',
    content: (ctx) =>  maxValue(ctx).toFixed(0)+"%",
    color: "#00286B",
    font: {
      size: 11,
       
    },
    padding: {
      top: 6,
      left: 6,
      right: 6,
      bottom: 6
    },
    position: {
      x: (ctx) => maxIndex(ctx) <= 3 ? 'start' : maxIndex(ctx) >= 10 ? 'end' : 'center',
      y: "end"
    },
    xValue: (ctx) => maxLabel(ctx),
    yAdjust: 32,
    yValue: (ctx) => maxValue(ctx)
  };

  const annotation2 = {
    type: 'point',
    backgroundColor: '#0A8ED9',
    // borderColor: (ctx) => ctx.chart.data.datasets[0].borderColor,
    border: "2px solid #00286B",
    pointStyle: 'point',
    radius: 7,

    xValue: (ctx) => maxLabel(ctx),
    yValue: (ctx) => maxValue(ctx)
  };

export const options = {
    scales: {
        x: {
           grid: {
              display: false
              
           }
        },
        y: {
           grid: {
              display: true,
              
           },

           ticks: {
            
            callback: function (value, index, values) {
              return value + " %" ;
            }
          }
        }
   },
    responsive: true,
    elements: {
        point:{
            radius: 0
        }
    },
    plugins: {
        annotation: {
            clip: false,
            annotations: {
              annotation1,
              annotation2
            }
          },
        legend: {
            position: 'top',
            align: "end",
            display: false

        },

        legendCallback: function (chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets.length; i++) {
                text.push('<li><span style="background-color:' +
                    chart.data.datasets[i].backgroundColor +
                    '"></span>');
                if (chart.data.datasets[i].label) {
                    text.push(chart.data.datasets[i].label);
                }
                text.push('</li>');
            }
            text.push('</ul>');
            return text.join('');
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },

        
    },

   
};

const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

export const data = {
    labels,
    datasets: [
        {
            label: ' Kokapet ',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: '#12B7B6',
            backgroundColor: 'rgba(255, 175, 175, 0.2)',
            pointBackgroundColor: "#fff",
            pointBorderColor: "#12B7B6",
            fill: false,
            points: "none"

        },
        
    ],
};



function ConstructionChart() {

    

  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default ConstructionChart