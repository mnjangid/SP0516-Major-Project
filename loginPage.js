
// // pehle sirf select value ke basis pr redirect ho rha tha

// document.getElementById("loginform").addEventListener("submit", (e) => {
//     e.preventDefault();

//     const role = document.getElementById("role").value;

//     if (!role) {
//         alert("Please select a role");
//         return;
//     }

//     switch (role) {
//         case "storemanager":
//             window.location.href = "storeManager/storeManagerDashboard.html";
//             break;

//         case "warehousestaff":
//             window.location.href = "warehousestaff/warehousePackShip.html";
//             break;

//         case "regionalmanager":
//             window.location.href = "regionalOfficer/regionalOfficerDashboard.html";
//             break;

//         default:
//             alert("Invalid role selected");
//     }
// });



import { imsData } from "./data/data.js";
const form = document.getElementById("loginform");
const loginCard = document.getElementById("loginCard");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // user check kr rha h
    const user = imsData.users.find(u=>
        u.role===role &&
        u.email===email &&
        u.password===password
    );
    if(!user){
        // alert("User not found");
        
        loginCard.classList.add("shake");
        setTimeout(()=>{
            loginCard.classList.remove("shake");
        },400)
        return;
    }     
    else{
        // alert("Login Successful");
        window.location.href = user.redirect;
    }
    window.addEventListener("pageshow",()=>{
        document.getElementById("loginform").reset();
    })
});