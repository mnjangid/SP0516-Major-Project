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
            <td>
            <span class="badge ${req.priority.toLowerCase()}">${req.priority}</td>
            <td>
                <button class="action-btn" onclick="packShip('${req.requestId}')">Pack & Ship</button>
            </td>
        `;

        tableBody.appendChild(row);
    
    });
}


const allPackRequests = imsData.packRequests;
const packRequests = allPackRequests;

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

// renderPackShipTable(imsData.packRequests);



window.packShip = function (requestId) {
  // index find kr rha h
  const index = packRequests.findIndex(
    (req) => req.requestId === requestId
  );

  if (index === -1) {
    alert("Request not found");
    return;
  }

  // alert popup
  alert(`Request ${requestId} is packed and shipped`);

  // remove row from the table
  packRequests.splice(index, 1);

  // re-render table
  renderPackShipTable(packRequests);
};
renderPackShipTable(packRequests);

// live Inventory ke liye code

