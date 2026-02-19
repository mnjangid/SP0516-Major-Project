

document.getElementById("loginform").addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;

    if (!role) {
        alert("Please select a role");
        return;
    }

    switch (role) {
        case "storemanager":
            window.location.href = "storeManager/storeManagerDashboard.html";
            break;

        case "warehousestaff":
            window.location.href = "warehousestaff/warehousePackShip.html";
            break;

        case "regionalmanager":
            window.location.href = "regionalOfficer/regionalOfficerDashboard.html";
            break;

        default:
            alert("Invalid role selected");
    }
});