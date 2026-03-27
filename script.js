/* WELCOME POPUP - show only first visit */

window.onload = function () {

if(localStorage.getItem("visited") === "true"){

let popup = document.getElementById("welcomePopup");

if(popup){
popup.style.display = "none";
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



/* PRODUCT ORDER POPUP */

let selectedProduct = "";

function openPopup(product){

selectedProduct = product;

let popup = document.getElementById("orderPopup");

if(popup){
popup.style.display = "flex";
}

}



/* CLOSE ORDER POPUP */

function closePopup(){

let popup = document.getElementById("orderPopup");

if(popup){
popup.style.display = "none";
}

}



/* CONFIRM ORDER */

function confirmOrder(){

let name = document.getElementById("name").value;

let phone = document.getElementById("phone").value;

let address = document.getElementById("address").value;


let message =
"New Order%0A%0A" +
"Product: " + selectedProduct + "%0A" +
"Name: " + name + "%0A" +
"Phone: " + phone + "%0A" +
"Address: " + address;


let url = "https://wa.me/212775089960?text=" + message;

window.open(url, "_blank");

}