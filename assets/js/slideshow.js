let slideIndexes = [1, 1]; // Array to track slides for each slideshow

// Initialize all slideshows
function initSlideshows() {
    for (let i = 1; i <= 2; i++) {
        showSlides(1, i);
    }
}

function changeSlide(n, slideshowNum) {
    showSlides(slideIndexes[slideshowNum - 1] += n, slideshowNum);
}

function currentSlide(n, slideshowNum) {
    showSlides(slideIndexes[slideshowNum - 1] = n, slideshowNum);
}

function showSlides(n, slideshowNum) {
    let slides = document.querySelectorAll(`.slideshow-container:nth-of-type(${slideshowNum}) .slide`);
    let dots = document.querySelectorAll(`.slideshow-container:nth-of-type(${slideshowNum}) .dot`);
    
    if (n > slides.length) {slideIndexes[slideshowNum - 1] = 1}
    if (n < 1) {slideIndexes[slideshowNum - 1] = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndexes[slideshowNum - 1] - 1].style.display = "block";
    dots[slideIndexes[slideshowNum - 1] - 1].className += " active";
}

// Initialize slideshows when the page loads
window.onload = initSlideshows; 