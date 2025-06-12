document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let autoSlideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    const dotElements = document.querySelectorAll('.dot');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dotElements[index].classList.remove('active');
        });
        slides[currentSlide].classList.add('active');
        dotElements[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        startAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Start auto-sliding
    startAutoSlide();

    // Pause on hover
    const container = document.querySelector('.slideshow-container');
    container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    container.addEventListener('mouseleave', startAutoSlide);
}); 