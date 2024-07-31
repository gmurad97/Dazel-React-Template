import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import "./Statistic.css";

// Регистрация компонентов Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Statistic = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            const gradientBlue = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
            gradientBlue.addColorStop(0, '#2BB2FE');
            gradientBlue.addColorStop(1, '#22CAAD');

            const gradientOrange = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
            gradientOrange.addColorStop(0, '#F86624');
            gradientOrange.addColorStop(1, '#F9C80E');

            chart.data.datasets[0].backgroundColor = gradientBlue;
            chart.data.datasets[1].backgroundColor = gradientOrange;
            chart.update();
        }
    }, []);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [400, 600, 200, 800, 1200, 400, 680, 300, 600, 800, 400, 500],
                backgroundColor: '#00C8F8', // Will be overridden by gradient
                borderRadius: 10,
                borderSkipped: false,
            },
            {
                label: 'Sales',
                data: [200, 400, 300, 600, 800, 200, 280, 150, 400, 600, 300, 400],
                backgroundColor: '#FFBE0B', // Will be overridden by gradient
                borderRadius: 10,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'black',
                    usePointStyle: true,
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets.map((dataset, i) => {
                            return {
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.backgroundColor,
                                lineWidth: 0,
                                hidden: chart.getDatasetMeta(i).hidden,
                                index: i,
                                pointStyle: 'rectRounded', // Use 'rectRounded' for rounded rectangles
                            };
                        });
                    },
                },
            },
            datalabels: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ' : ';
                        }
                        if (context.parsed.y !== null) {
                            label += `$${context.parsed.y}`;
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return `$${value}`;
                    },
                },
                grid: {
                    color: '#E0E0E0',
                },
            },
        },
    };

    return (
        <div className='stats_block'>
            <h2 className='stats_block__title'>Statistic</h2>
            <p className='stats_block__description'>Income and Expenses</p>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Statistic;
