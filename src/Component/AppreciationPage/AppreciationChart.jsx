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
    Filler,
    
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { Line } from 'react-chartjs-2';
// import * as faker from "faker"
import { faker } from '@faker-js/faker';
import { Dashboard } from '@mui/icons-material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    annotationPlugin
    
);

export const options = {
    responsive: true,
    elements: {
        point:{
            radius: 0
        }
    },
    plugins: {
        legend: {
            position: 'top',
            align: "end",

        },

        annotation: {
            annotations: {
              line: {
                type: 'line',
                xMin: 4,
                xMax: 4,
                content: "jlkjkj",
                borderColor: '#0A8ED9',
                borderWidth: 1,
                borderDash: [6,6],
                label: {
                    enabled: true,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    position: "bottom",
                    drawTime: 'afterDatasetsDraw',
                    color: '#005DAF',
                    content: (ctx) => ['Present'],
                    textAlign: 'center',
                    
                    yAdjust: 48
                    
                  },
                 
                  
                  
                
              },
              
            }
        },

       
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },

    scales: {
        x: {
           grid: {
              display: false
              
           }
        },
        y: {
           grid: {
              display: true,
              borderDash: [8, 4]
           },
           ticks: {
            
            callback: function (value, index, values) {
              return value + " ft²" ;
            }
          }
        }
   },
};

const labels = ["Jun’21", "Jul’21", "Aug’21", "Sep’21", "Oct’21", "Nov’21"];


const dash = (ctx, value) => ctx.p0DataIndex >= labels.indexOf("Oct’21") ? value : [ 6 , 0 ]

export const data = {
    labels,
    datasets: [
        {
            label: ' Past & New appreciation ',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 6000 })),
            borderColor: '#12B7B6',
            backgroundColor: 'rgba(255, 175, 175, 0.2)',
            fill: false,
            tension: 0,
            segment: {
                borderDash : ctx => dash( ctx, [ 6, 6 ] || [ 6, 0 ])
            },
            
            
            

        },
        {
            label: ' Locality Avg. Graph ',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 6000 })),
            borderColor: '#405DF9',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            fill: false,
            segment: {
                borderDash : ctx => dash( ctx, [ 6, 6 ] || [ 6, 0 ])
            },

        },
    ],
};


function AppreciationChart() {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default AppreciationChart