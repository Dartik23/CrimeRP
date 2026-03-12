const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropbtn");

button.addEventListener("click", function(){

dropdown.classList.toggle("active");

});

window.addEventListener("click", function(e){

if (!dropdown.contains(e.target)) {

dropdown.classList.remove("active");

}

});