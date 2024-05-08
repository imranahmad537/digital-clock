



function smartWatch(){
    let today = new Date();
    let hour = today.getHours().toString().padStart(2,'0');
    let mint = today.getMinutes().toString().padStart(2,'0');
    let secds = today.getSeconds().toString().padStart(2,'0');
    let day = today.getDate();
    let month = today.getMonth() +1;
    let yr = today.getFullYear();

    // Setting PM or AM
    let meridiem = hour >=12 ? 'PM' : 'AM';
    // setting 12 hour format
    let thf = hour % 12 || 12;
    
    let timeString = `${thf}:${mint}:${secds}   ${meridiem}`;
    
    document.querySelector(".time").textContent = timeString;

   let formatedDate = `${day}/${month}/${yr}`;
   
    let show = document.querySelector(".date");
    show.textContent = formatedDate;
}

smartWatch()
setInterval(smartWatch,1000);


// let year = today.getFullYear();
// let month = today.getMonth();
// let day = today.getDay();





// let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let months = ["January","Februry","March","April","May","June","July","August","September","October","November","December"];

// document.querySelector(".yr").textContent = year
// document.querySelector(".mon").textContent = months[month];
// document.querySelector(".day").textContent = days[day];
// document.querySelector(".hr").textContent = hour;
// document.querySelector(".min").textContent = mint;
// document.querySelector(".sec").textContent = secds;


