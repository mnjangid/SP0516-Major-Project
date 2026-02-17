let allPackRequests = [];

document.addEventListener("DOMContentLoaded", () => {
  loadPackShipData();
});

// yh live inventory ko load krne ke liye
// document.addEventListener("DOMContentLoaded", () => {
//   if (document.getElementById("liveInventoryBody")) {
//     loadInventoryData();
//   }
// });

function loadPackShipData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      allPackRequests = data.packRequests;
      renderPackShipTable(allPackRequests);
    })
    .catch((error) => {
      console.log("Error loading JSON:", error);
    });
}

function renderPackShipTable(packRequests) {
  const tableBody = document.getElementById("packShipBody");
  tableBody.innerHTML = ""; // hr baar old data ko refresh kr dega

  packRequests.forEach((request) => {
    const totalItems = request.quantities.reduce((sum, q) => sum + q, 0);

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${request.store}</td>
            <td>${request.items.join(", ")}</td>
            <td>${totalItems}</td>
            <td>${request.requestId}</td>
            <td>
                <span class="badge ${request.priority.toLowerCase()}">
                    ${request.priority}
                </span>
            </td>
            <td>
                <button class="action-btn">Pack & Ship</button>
            </td>
        `;

    tableBody.appendChild(row);
  });
}

document.querySelector(".search-input").addEventListener("input", handleSearch);

function handleSearch() {
  const searchValue = document
    .querySelector(".search-input")
    .value.toLowerCase()
    .trim();

  const filterdata = allPackRequests.filter((request) => {
    return (
      request.store.toLowerCase().includes(searchValue) ||
      request.requestId.toLowerCase().includes(searchValue) ||
      request.priority.toLowerCase().includes(searchValue)
    );
  });

  renderPackShipTable(filterdata);
}

// liveInventory ka data yha aayega
