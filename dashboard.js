
const evData = [
  {
    supplier: "Lithion Energy",
    category: "Battery Cells",
    capacity: "100 MWh",
    status: "Active"
  },
  {
    supplier: "VoltDrive Motors",
    category: "Electric Motors",
    capacity: "25,000 units",
    status: "Active"
  },
  {
    supplier: "EcoCharge Systems",
    category: "Charging Stations",
    capacity: "1,200 units",
    status: "Pending"
  },
  {
    supplier: "NanoTherm Solutions",
    category: "Thermal Management",
    capacity: "50,000 units",
    status: "Active"
  },
  {
    supplier: "FusionPower Electronics",
    category: "Power Electronics (Inverters/Converters)",
    capacity: "15,000 units",
    status: "Inactive"
  }
];

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



const table = document.querySelector(".tablelist");

evData.map((item, index)=>{
    const row = document.createElement("tr")
    row.className =  `row ${index + 1}`;

     row.innerHTML = `
        <td>${item.supplier}</td>
        <td>${item.category}</td>
        <td>${item.capacity}</td>
        <td>${item.status}</td>
    `;
     table.appendChild(row);
})





























