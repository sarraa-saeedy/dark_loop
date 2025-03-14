
// جاوا اسکریپت اسلایدر
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// نمایش اولین اسلاید
showSlide(currentIndex)
