document.querySelectorAll(".dropdown").forEach(dropdown => {
  const button = dropdown.querySelector(".dropbtn");
  button.addEventListener("click", function(e){
    e.stopPropagation(); // zabrání zavření dropdown při kliknutí na button
    dropdown.classList.toggle("active");
  });
});

// Zavření dropdown při kliknutí mimo
window.addEventListener("click", function(){
  document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
});