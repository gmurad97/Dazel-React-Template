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
            // Создание градиента для первого набора данных
            const gradientBlue = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
            gradientBlue.addColorStop(0, '#22CAAD'); // Начало градиента
            gradientBlue.addColorStop(1, '#2BB2FE'); // Конец градиента
            
            // Создание градиента для второго набора данных
            const gradientOrange = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
            gradientOrange.addColorStop(0, '#F9C80E'); // Начало градиента
            gradientOrange.addColorStop(1, '#F86624'); // Конец градиента
            
            // Применение градиентов к наборам данных
            chart.data.datasets[0].backgroundColor = gradientBlue;
            chart.data.datasets[1].backgroundColor = gradientOrange;
            chart.update();
            
        }
    }, []);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Доход',
                data: [400, 600, 200, 800, 1200, 400, 680, 300, 600, 800, 400, 500],
                backgroundColor: '#00C8F8', // Будет переопределён градиентом
                borderRadius: 10,
                borderSkipped: false,
                barPercentage: 0.8, // Adjust width of bars
                categoryPercentage: 0.6, // Adjust width of bars
            },
            {
                label: 'Продажи',
                data: [200, 400, 300, 600, 800, 200, 280, 150, 400, 600, 300, 400],
                backgroundColor: '#FFBE0B', // Будет переопределён градиентом
                borderRadius: 10,
                borderSkipped: false,
                barPercentage: 0.8, // Adjust width of bars
                categoryPercentage: 0.6, // Adjust width of bars
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
                                pointStyle: 'circle', // Круглые иконки в легенде
                                pointRadius: 10, // Размер иконки
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
                // Настройки отступов
                categoryPercentage: 0.8, // Отступ между барами в категории
                barPercentage: 0.9, // Отступ между различными наборами данных
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
            <h2 className='stats_block__title'>Статистика</h2>
            <p className='stats_block__description'>Доход и расходы</p>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Statistic;
