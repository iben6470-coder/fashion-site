/* =========================
WELCOME POPUP (FIRST VISIT)
========================= */

window.onload = function(){

let popup = document.getElementById("welcomePopup");

if(localStorage.getItem("visited") === "true"){

if(popup){
popup.style.display = "none";
}

}else{

if(popup){
popup.style.display = "flex";
}

}

};


/* CLOSE WELCOME */

function closeWelcome(){

let popup = document.getElementById("welcomePopup");

if(popup){
popup.style.display = "none";
}

localStorage.setItem("visited","true");

}



/* =========================
SEARCH 🔍
========================= */

function toggleSearch(){

let box = document.getElementById("searchBox");

if(!box) return;

if(box.style.display === "block"){
box.style.display = "none";
}else{
box.style.display = "block";
}

}



/* =========================
MOBILE MENU ☰
========================= */

function toggleMenu(){

let menu = document.querySelector("nav");

menu.classList.toggle("show");

}



/* =========================
ORDER POPUP
========================= */

let selectedProduct = "";


/* OPEN POPUP */

function openPopup(product){

selectedProduct = product;

let popup = document.getElementById("orderPopup");

if(popup){
popup.style.display = "flex";
}

}


/* CLOSE POPUP */

function closePopup(){

let popup = document.getElementById("orderPopup");

if(popup){
popup.style.display = "none";
}

}



/* =========================
SEND ORDER TO WHATSAPP
========================= */

function confirmOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(name === "" || phone === "" || address === ""){
alert("Please fill all fields");
return;
}

let message =
"New Order %0A%0A" +
"Product: " + selectedProduct + "%0A" +
"Name: " + name + "%0A" +
"Phone: " + phone + "%0A" +
"Address: " + address;

let url = "https://wa.me/212775089960?text=" + message;

window.open(url,"_blank");

}
function toggleSearch() {

let panel = document.getElementById("searchPanel");

if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}

}

function closeSearch() {
document.getElementById("searchPanel").style.display = "none";
}
function searchProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();

let items = document.querySelectorAll(".search-item");

items.forEach(function(item){

let text = item.innerText.toLowerCase();

if(text.includes(input)){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

}
function searchProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();


if(input.includes("shoe")){
window.location.href = "shoes.html";
}

else if(input.includes("tshirt") || input.includes("shirt")){
window.location.href = "tshirts.html";
}

else if(input.includes("jean")){
window.location.href = "jeans.html";
}

else if(input.includes("jacket")){
window.location.href = "jackets.html";
}

}
