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
        legend: {
            position: 'top',
            align: "end",

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
            data: labels.map(() => faker.datatype.number({ min: 50, max: 300 })),
            borderColor: '#12B7B6',
            backgroundColor: 'rgba(255, 175, 175, 0.2)',
            pointBackgroundColor: "#fff",
            pointBorderColor: "#12B7B6",
            fill: false,
            points: "none"

        },
        
    ],
};



function Chart2() {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default Chart2