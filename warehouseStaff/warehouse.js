import { imsData } from "../data/data.js";


function renderPackShipTable(data){
    const tableBody = document.getElementById("packShipBody");
    tableBody.innerHTML =  "";

    data.forEach((req)=>{

        const totalItems = req.quantities.reduce((sum,q)=>sum+q,0);
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${req.store}</td>
            <td>${req.items.join(", ")}</td>
            <td>${totalItems}</td>
            <td>${req.requestId}</td>
            <td>${req.priority}</td>
            <td>
                <button class="action-btn">Pack & Ship</button>
            </td>
        `;

        tableBody.appendChild(row);
    
    });
}


const allPackRequests = imsData.packRequests;

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchInput.addEventListener("input",()=>{
    const query = searchInput.value.toLowerCase().trim();

    const filterData = allPackRequests.filter((req)=>{
        return(
            req.store.toLowerCase().includes(query) || req.requestId.toLowerCase().includes(query) || req.priority.toLowerCase().includes(query)
        );
        
    });
    renderPackShipTable(filterData);
})

renderPackShipTable(imsData.packRequests);


// live Inventory ke liye code ->

