document.addEventListener("DOMContentLoaded", () => {

console.log("NCE Digital Routine v2 Loaded");

const loginBtn = document.querySelector(".top-menu button:first-child");
const adminBtn = document.querySelector(".top-menu button:last-child");

if(loginBtn){
loginBtn.onclick = () => {
window.location.href = "admin/login.html";
};
}

if(adminBtn){
adminBtn.onclick = () => {
window.location.href = "admin/dashboard.html";
};
}

});
