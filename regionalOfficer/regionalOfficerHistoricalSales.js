import { historicalSalesData} from "../data/data.js";

        Chart.register(ChartDataLabels);

        const salesTrendCanvas = document.getElementById('salesTrendChart').getContext('2d');

     

        const salesTrendChart = new Chart(salesTrendCanvas, {
            type: 'line',
            data: {
                labels: historicalSalesData[0].months,
                datasets: [
                    {
                        label: 'Actual',
                        data: historicalSalesData[0].actualSalesData,
                        borderColor: '#7b8dd4',
                        backgroundColor: 'rgba(123, 141, 212, 0.2)',
                        fill: true,
                        tension: 0.5
                    },
                    {
                        label: 'Forecasted',
                        data: historicalSalesData[0].forecastedSalesData,
                        borderColor: '#e8a598',
                        backgroundColor: 'rgba(232, 165, 152, 0.2)',
                        fill: true,
                        tension: 0.5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        display: false   
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1600,
                        ticks: {
                            callback: function(value) {
                                return value + 'k Rs';
                            }
                        }
                    }
                }
            }
        });


         const regionalSalesCanvas = document.getElementById('regionalSalesChart').getContext('2d');
        const doughnutCenterText = {
            id: 'doughnutCenterText',
            afterDraw(chart) {
                if (chart.config.type !== 'doughnut') return;
                const { ctx, chartArea: { left, top, right, bottom } } = chart;
                const cx = (left + right) / 2;
                const cy = (top + bottom) / 2;
                const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                ctx.save();
                ctx.font = 'bold 16px sans-serif';
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total.toLocaleString(), cx, cy);
                ctx.restore();
            }
        };

        const regionalSalesChart = new Chart(regionalSalesCanvas, {
            type: 'doughnut',
            plugins: [doughnutCenterText],
            data: {
                labels: historicalSalesData[1].storeNames,
                datasets: [{
                    data: historicalSalesData[1].storeSalesData,
                    backgroundColor: historicalSalesData[1].storeColors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '55%',
                layout: {
                    padding: 40
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        display: true,
                        anchor: 'end',
                        align: 'end',
                        offset: 6,
                        color: '#333',
                        font: {
                            size: 10,
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            return context.chart.data.labels[context.dataIndex];
                        }
                    }
                }
            }
        });




        
        const categoryCanvas = document.getElementById('categoryBreakdownChart').getContext('2d');

        const categoryBreakdownChart = new Chart(categoryCanvas, {
            type: 'pie',
            data: {
                labels: historicalSalesData[2].categoryNames,
                datasets: [{
                    data: historicalSalesData[2].categorySalesData,
                    backgroundColor: historicalSalesData[2].categoryColors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 40
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        display: true,
                        anchor: 'end',
                        align: 'end',
                        offset: 6,
                        color: '#333',
                        font: {
                            size: 10,
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            return context.chart.data.labels[context.dataIndex];
                        }
                    }
                }
            }
        });




        const q4ForecastCanvas = document.getElementById('q4ForecastChart').getContext('2d');

        const q4ForecastChart = new Chart(q4ForecastCanvas, {
            type: 'bar',
            data: {
                labels: historicalSalesData[3].q4StoreNames,
                datasets: [{
                    label: 'Q4',
                    data: historicalSalesData[3].q4ForecastData,
                    backgroundColor: '#7b8dd4',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        display: false  
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 200000
                    }
                }
            }
        });