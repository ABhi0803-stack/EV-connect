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


