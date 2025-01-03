/*------------------------------burger------------------------------ */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.width = "11vw"; 
    document.getElementById("nav-menu").style.top = "130px"; 
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
    document.getElementById("logo").style.width = "12vw";
    document.getElementById("nav-menu").style.top = "160px";
  }
}
/*------------------------------background darken------------------------------ */
function myFunction() {
  var x = document.getElementById("body-cover");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
}

/*------------------------------slideshow------------------------------ */
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName("dot");
  let textboxs = document.getElementsByClassName("slide-textbox");
  
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  
  // Hide all slides
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active1", "");
  }

  for (i = 0; i < textboxs.length; i++) {
    textboxs[i].className = textboxs[i].className.replace(" active2", "");
  }
  
  // Display the current slide
  x[slideIndex[no]-1].style.display = "block";  
  
  // Add active class to the current dot
  dots[slideIndex[no]-1].className += " active1";
  textboxs[slideIndex[no]-1].className += " active2";
}