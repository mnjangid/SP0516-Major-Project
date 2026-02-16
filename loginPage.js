document.getElementById("login-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const role = document.getElementById("role").value;
    if(!role){
            alert("Please select a role");
            return;
    }
    switch(role){
        
        case "store-manager":
            window.location.href = "store-manager.html"; // link file ke naam ke hisaab se change bhi ho skti h 
            break;

        case "Warehouse-staff":
            window.location.href = "warehousePackShip.html";
            break;

        case "regional-officer":
            window.location.href = "regionalDashboard.html";
            break;

        default: 
            alert("Invalid role selected");
    }
});