const cName = document.getElementById("companyname");
const locationva = document.getElementById("location");
const ccategory = document.getElementById("component");
const production = document.getElementById("production");
const cPersonName = document.getElementById("cpersonname");
const cNumber = document.getElementById("cnumber");
const emailvalue = document.getElementById("email");
const button = document.getElementById("submitbtn");
const form = document.getElementById("evform");
const succ = document.querySelector(".success")
const head1 = document.querySelector(".centerh1")
const para = document.querySelector(".centerp")
const cross = document.querySelector(".crossbtn")

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const footer = document.querySelectorAll(".footer-h3");
const yearId = document.getElementById("year");

const year= new Date().getFullYear();
console.log(year);

document.addEventListener("DOMContentLoaded",()=>{
    yearId.textContent = year;
})

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const companyDetails =[];

const companyDetailslocal = JSON.parse(localStorage.getItem("companydata")) || [];


document.addEventListener('DOMContentLoaded', () => {

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const data = {
      companyName:cName.value,
      location:locationva.value,
      category:ccategory.value,
      production:production.value,
      contactPerson:cPersonName.value,
      contactNumber:cNumber.value,
      email: emailvalue.value
    };

     companyDetails.push(data);
     localStorage.setItem("companydata", JSON.stringify(companyDetails));
     succ.style.display = "flex";
     head1.textContent = data.contactPerson;


    

  });
});


