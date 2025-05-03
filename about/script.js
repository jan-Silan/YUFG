let navLinks = document.getElementById('navbar_hamburger');
let narrowLinks = document.getElementById('navbar_links_small');
let burgerGap = document.getElementById('burger_gap');
let gradientRectangle = document.getElementById('gradient_rectangle');

navLinks.addEventListener('click', toggle);

function toggle() {
    narrowLinks.classList.toggle('hidden');
    burgerGap.classList.toggle('hidden');
    var divHeight = document.getElementById('navbar').offsetHeight;
    console.log("divHeight")
    gradientRectangle.style.height = divHeight + "px";
}