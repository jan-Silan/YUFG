let navLinks = document.getElementById('navbar_hamburger');
let narrowLinks = document.getElementById('navbar_links_small');
let burgerGap = document.getElementById('burger_gap');
let gradientRectangle = document.getElementById('gradient_rectangle');
navLinks.addEventListener('click', toggle);
function toggle() {
    narrowLinks.classList.toggle('hidden');
    burgerGap.classList.toggle('hidden');
    var divHeight = document.getElementById('actual_page_contents').offsetHeight;
    var divLoc = document.getElementById('actual_page_contents').offsetTop;
    gradientRectangle.style.height = divLoc + divHeight + "px";
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("malaria_images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}