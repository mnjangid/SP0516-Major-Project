import { labels , datasets } from "./regionalOfficerDashboardData.js";

window.onload = function() {
    

    const canvas = document.getElementById('salesChartCanvas');
    const ctx = canvas.getContext('2d');

    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 200,
                    ticks: {
                        stepSize: 40,
                        callback: function(value) {
                                return value + 'k Rs';
                            }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    
};

root.append(chart);
