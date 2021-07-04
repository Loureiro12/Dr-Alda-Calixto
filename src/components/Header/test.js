var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  ga("send", "event", "galeria", "next_prev", "Titulo da página");
}

function ahowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesFade");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (((i = 0), i < slides.length, i++)) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
