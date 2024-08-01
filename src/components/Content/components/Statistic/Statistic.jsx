import { useContext, useEffect, useMemo, useRef } from 'react';
import "./Statistic.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const Statistic = () => {
    const { getTranslate } = useContext(LanguageContext);
    const chartRef = useRef(null);

    const data = useMemo(() => (
        {
            labels: [
                getTranslate("month_labels_jan"),
                getTranslate("month_labels_feb"),
                getTranslate("month_labels_mar"),
                getTranslate("month_labels_apr"),
                getTranslate("month_labels_may"),
                getTranslate("month_labels_jun"),
                getTranslate("month_labels_jul"),
                getTranslate("month_labels_aug"),
                getTranslate("month_labels_sep"),
                getTranslate("month_labels_oct"),
                getTranslate("month_labels_nov"),
                getTranslate("month_labels_dec"),
            ],
            datasets: [
                {
                    label: getTranslate("dataset_labels_revenue"),
                    data: [400, 600, 200, 800, 1200, 400, 680, 300, 600, 800, 400, 500],
                    backgroundColor: "#00C8F8",
                    borderRadius: 10,
                    borderSkipped: false,
                    barPercentage: 0.8,
                    categoryPercentage: 0.6,
                },
                {
                    label: getTranslate("dataset_labels_sales"),
                    data: [200, 400, 300, 600, 800, 200, 280, 150, 400, 600, 300, 400],
                    backgroundColor: "#FFBE0B",
                    borderRadius: 10,
                    borderSkipped: false,
                    barPercentage: 0.8,
                    categoryPercentage: 0.6,
                },
            ],
        }
    ), [getTranslate]);

    const options = useMemo(() => (
        {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: {
                        color: "#667085",
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
                                    pointStyle: "circle",
                                    pointRadius: 10,
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
                            let label = context.dataset.label || "";
                            if (label) {
                                label += " : ";
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
                        color: "#C2C6CE",
                    },
                },
            },
        }
    ), []);

    useEffect(() => {
        if (chartRef.current) {
            const gradientBlue = chartRef.current.ctx.createLinearGradient(0, 0, 0, chartRef.current.height);
            gradientBlue.addColorStop(0, "#22CAAD");
            gradientBlue.addColorStop(1, "#2BB2FE");
            const gradientOrange = chartRef.current.ctx.createLinearGradient(0, 0, 0, chartRef.current.height);
            gradientOrange.addColorStop(0, "#F9C80E");
            gradientOrange.addColorStop(1, "#F86624");
            chartRef.current.data.datasets[0].backgroundColor = gradientBlue;
            chartRef.current.data.datasets[1].backgroundColor = gradientOrange;
            chartRef.current.update();
        }
    }, [data, options]);

    return (
        <div className="stats_block">
            <h2 className="stats_block__title">{getTranslate("stats_block_title")}</h2>
            <p className="stats_block__description">{getTranslate("stats_block_description")}</p>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Statistic;
