// Wait for page to load completely
window.onload = function() {
    
    // Get canvas element
    const canvas = document.getElementById('salesChartCanvas');
    const ctx = canvas.getContext('2d');

    // Create chart
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Store A',
                    data: [35, 45, 115, 50, 65, 40],
                    backgroundColor: '#5b6abf'
                },
                {
                    label: 'Store B',
                    data: [50, 55, 65, 85, 95, 30],
                    backgroundColor: '#e07b7b'
                },
                {
                    label: 'Store C',
                    data: [60, 75, 90, 100, 110, 100],
                    backgroundColor: '#5bbfbf'
                },
                {
                    label: 'Store D',
                    data: [70, 80, 95, 105, 120, 125],
                    backgroundColor: '#e0b85b'
                },
                {
                    label: 'Store E',
                    data: [40, 50, 60, 70, 85, 95],
                    backgroundColor: '#5b8abf'
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
