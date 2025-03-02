document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-nav .prev');
    const nextButton = document.querySelector('.carousel-nav .next');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  
    // Show a specific slide by index
    function showSlide(index) {
        if (index >= totalSlides) {
        slideIndex = 0;
        } else if (index < 0) {
        slideIndex = totalSlides - 1;
        } else {
        slideIndex = index;
        }
        carouselContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    
        // Update active slide and indicator
        slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === slideIndex);
        });
        indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === slideIndex);
        });
    }
  
    // Next/Prev button clicks
    nextButton.addEventListener('click', () => showSlide(slideIndex + 1));
    prevButton.addEventListener('click', () => showSlide(slideIndex - 1));
  
    // Indicator clicks
    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => showSlide(i));
    });
  
    // Auto-slide every 7 seconds
    setInterval(() => {
      showSlide(slideIndex + 1);
    }, 7000);
  
    // Initially show the first slide
    showSlide(slideIndex);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    // Add 'scrolled' class when scrolling down, remove when at the top
    if (scrollPosition > 50) { // Adjust this value as needed
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });