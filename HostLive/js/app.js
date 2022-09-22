let navbar = document.getElementById('navbar');
let iconBox = document.getElementById('iconBox');
let icon = iconBox.querySelector('.icon-name')

let menu = document.getElementById('navitems');
let bottomBtn = document.getElementById('bottomNav');
let plansTable = document.getElementById('plansTable');
let section6 = document.getElementById('section6');
let rows = document.querySelectorAll('.row');
let timer = document.getElementById('timer');

// making navbar sticky when we scroll
window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add('sticky');
    iconBox.classList.add('sticky')
  }
  else {
    navbar.classList.remove('sticky');
    iconBox.classList.remove('sticky');
  }
}

// Creating navbar logic fo r small devices 
icon.addEventListener('click', () => {

  if (navbar.style.transform != "translate(0px)") {
    icon.innerHTML = `X`
    navbar.style.transform = "translate(0px)"
    menu.style.transform = "translate(0px)"
  } else {
    icon.innerHTML = `≡`
    navbar.style.transform = "translate(1000px)"
    menu.style.transform = "translate(1000px)"
  }

})

// Create pricing table functional 
bottomBtn.addEventListener('click', () => {

  if (plansTable.style.height != "100vh") {
    plansTable.style.height = "100vh"
    bottomBtn.innerText = "Show Less"
    plansTable.style.overflow = "auto"
  } else {
    plansTable.style.overflow = "hidden"
    plansTable.style.height = "50vh"
    bottomBtn.innerText = "Show More"
  }
});

// creating logic for slider section
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// TIMER LOGIC
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  timer.innerHTML =
    `<p class="box">${days} <span>Days</span></p> :
  <p class="box">${hours} <span>Hours</span></p> :
  <p class="box">${minutes} <span>Min</span></p> :
  <p class="box">${seconds}<span>Sec</span></p>`

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);