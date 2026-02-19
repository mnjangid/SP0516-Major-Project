const lowStock = 20;
const highStock = 50;

const storeColumn = {
    storeA: 1,
    storeB: 2,
    storeC: 3,
    storeD: 4,
    storeE: 5,
};

const itemRow = {
    shirt: 0,
    tshirt: 1,
    pant: 2,
    jeans: 3,
    hoodie: 4,
};

function getStock(row, column) {
    const cell = row.cells[column];
    if (!cell) return 0;
    return parseInt(cell.textContent.trim(), 10);
}

function setStock(cell, newAmount) {

    if (newAmount < 10) {
        cell.textContent = "0" + newAmount;
    } else {
        cell.textContent = newAmount;
    }

    cell.classList.remove("low", "high");

    if (newAmount <= lowStock) {
        cell.classList.add("low");
    } else if (newAmount >= highStock) {
        cell.classList.add("high");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const fromStore = document.getElementById("fromStore");
    const selectedItem = document.getElementById("transferItem");
    const toStore = document.getElementById("toStore");
    const quantity = document.getElementById("transferQuantity");
    const transferBtn = document.querySelector(".transferbtn");

    transferBtn.addEventListener("click", function () {

        const from = fromStore.value;
        const item = selectedItem.value;
        const to = toStore.value;
        const qty = parseInt(quantity.value, 10);

        if (!from) {
            alert("Please select the 'From' store.");
            return;
        }
        if (!item) {
            alert("Please select an item.");
            return;
        }
        if (!to) {
            alert("Please select the 'To' store.");
            return;
        }
        if (from === to) {
            alert("'From' and 'To' stores cannot be the same.");
            return;
        }
        if (isNaN(qty) || qty <= 0) {
            alert("Please enter a valid quantity greater than 0.");
            return;
        }

        const table = document.querySelector(".datatable tbody");
        const row = table.rows[itemRow[item]];
        const fromCol = storeColumn[from];
        const toCol = storeColumn[to];

        const fromCell = row.cells[fromCol];
        const toCell = row.cells[toCol];

        const fromAmount = getStock(row, fromCol);
        const toAmount = getStock(row, toCol);

        if (qty > fromAmount) {
            alert("Not enough stock! " +
                fromStore.options[fromStore.selectedIndex].text +
                " only has " + fromAmount + " unit(s) of " +
                selectedItem.options[selectedItem.selectedIndex].text + ".");
            return;
        }

        const fromName = fromStore.options[fromStore.selectedIndex].text;
        const itemName = selectedItem.options[selectedItem.selectedIndex].text;
        const toName = toStore.options[toStore.selectedIndex].text;

        setStock(fromCell, fromAmount - qty);
        setStock(toCell, toAmount + qty);

        fromStore.value = "";
        selectedItem.value = "";
        toStore.value = "";
        quantity.value = "";

        alert("Done! Transferred " + qty + " unit(s) of " + itemName +
            " from " + fromName + " to " + toName + ".");
    });

});