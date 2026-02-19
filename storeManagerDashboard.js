import { imsData } from "./data/data.js";

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
        <table border="1" cellpadding="10" cellspacing="0" style="width:100%; margin-top:15px; height:250px">
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
                <td">${product.name}</td>
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