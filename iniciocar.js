var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(n);
  var i;
  // capturo el array de <li>
  var slides = document.getElementsByClassName("mySlides");
  // capturo las <img> pequeñas que estás debajo.
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  //si
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}



// carrousel 2

var slideIndex1 = 1;
// showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo1");
  var captionText = document.getElementById("caption1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex1);
  console.log(slides[slideIndex1-1]);
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  // captionText.innerHTML = dots[slideIndex1-1].alt;
}

// carrousel 3

var slideIndex3 = 1;
// showSlides2(slideIndex3);

// Next/previous controls
function plusSlides2(x) {
  showSlides2(slideIndex3 += x);
}

// Thumbnail image controls
function currentSlide2(x) {
  showSlides2(slideIndex3 = x);
}

function showSlides2(x) {
  console.log(slideIndex3);
  console.log(x);
  var i;
  //capturo los <li>
  var slides = document.getElementsByClassName("mySlides2");
  //capturo
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (x > slides.length) {slideIndex3 = 1}
  if (x < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex3);
  console.log(slides[slideIndex3-1]);
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
  // captionText.innerHTML = dots[slideIndex3-1].alt;
}
