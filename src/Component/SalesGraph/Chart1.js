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
    responsive: true,
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
           }
        }
   },
};

const labels = ["0%", "20%", "60%", "80%", "100%"];

export const data = {
    labels,
    datasets: [
        {
            label: ' Kokapet ',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 175, 175, 0.2)',
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgb(255, 99, 132)",
            fill: "start",

        },
        {
            label: ' Average Sales ',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgb(53, 162, 235)",
            fill: false,

        },
    ],
};

function Chart1() {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart1