
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getMonth();
let hour = today.getHours();
let mint = today.getMinutes();
let secds = today.getSeconds();

let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","Februry","March","April","May","June","July","August","September","October","November","December"];


document.querySelector(".yr").textContent = year
document.querySelector(".mon").textContent = months[month];
document.querySelector(".day").textContent = days[day];
document.querySelector(".hr").textContent = hour;
document.querySelector(".min").textContent = mint;
document.querySelector(".sec").textContent = secds;

