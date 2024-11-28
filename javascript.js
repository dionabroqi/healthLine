// JavaScript për funksionimin e slider-it
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    changeSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    changeSlide();
});

// Automatically change slides every 5seconds
setInterval(() => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    changeSlide();
}, 5000);
