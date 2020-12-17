var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

var autoSlides = 0;
autoShow();

function autoShow() {
    var i;
    var slides = document.getElementsByClassName("myAutos");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlides++;
    if (autoSlides > slides.length) { autoSlides = 1 }
    slides[autoSlides - 1].style.display = "block";
    setTimeout(autoShow, 4000);
}