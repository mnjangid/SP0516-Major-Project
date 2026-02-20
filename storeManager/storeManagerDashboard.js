import { imsData } from "../data/data.js";

const select = document.querySelector('.categorySelect');
const tableContainer = document.getElementById('productTableContainer');

select.addEventListener('change', function () {
    const selectedCategory = select.value;

    const filteredProducts = imsData.products.filter(product =>
        product.category === selectedCategory
    );

    renderTable(filteredProducts);
});

function renderTable(products) {
    if (products.length === 0) {
        tableContainer.innerHTML = "<p>No products found</p>";
        return;
    }

    let tableHTML = `
        <table border="1" cellpadding="10" cellspacing="0" style="width:100%;">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
    `;

    products.forEach(product => {
        tableHTML += `
            <tr >
                <td>${product.name}</td>
                <td>${product.quantity}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}


let sum1=0;
imsData.products.forEach((obj)=>{
    if(obj.id==="hoodie"){
        sum1+=Number(obj.quantity);
    }
})

let sum2=0;
imsData.products.forEach((obj)=>{
    if(obj.id==="shirt"){
        sum2+=Number(obj.quantity);
    }
})

let sum3=0;
imsData.products.forEach((obj)=>{
    if(obj.id==="jeans"){
        sum3+=Number(obj.quantity);
    }
})

let sum4=0;
imsData.products.forEach((obj)=>{
    if(obj.id==="tshirt"){
        sum4+=Number(obj.quantity);
    }
})

let sum5=0;
imsData.products.forEach((obj)=>{
    if(obj.id==="pants"){
        sum5+=Number(obj.quantity);
    }
})


// console.log(sum1);


 const ctx = document.getElementById('stockChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Shirt', 'Tshirt', 'Pants', 'Jeans', 'Hoodies'],
                datasets: [{
                    label: 'Stock Quantity',
                    data: [sum2, sum4, sum5, sum3, sum1],
                    backgroundColor: ['#e74c3c', '#27ae60', '#f1c40f', '#2980b9', '#8e44ad'],
                    borderRadius: 2,
                    barPercentage: 0.5,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            usePointStyle: false,
                            boxWidth: 22,
                            boxHeight: 22,
                            padding: 16,
                            font: { size: 13 },
                            generateLabels: function(chart) {
                                const labels = ['Shirt', 'T-Shirt', 'Pants', 'Jeans', 'Hoodies'];
                                const colors = ['#e74c3c', '#27ae60', '#f1c40f', '#2980b9', '#8e44ad'];
                                return labels.map((label, i) => ({
                                    text: label,
                                    fillStyle: colors[i],
                                    strokeStyle: colors[i],
                                    lineWidth: 0,
                                    hidden: false,
                                    index: i
                                }));
                            }
                        }
                    },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { font: { size: 11 }, color: '#555' }
                    },
                    y: {
                        min: 0,
                        max: 400,
                        ticks: { stepSize: 80, font: { size: 11 }, color: '#666' },
                        grid: { color: '#e0e0e0' }
                    }
                }
            }
        });