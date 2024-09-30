let slides = document.querySelectorAll('.slide');
let slidesContainer = document.querySelector('.slides-container');
let currentIndex = 0;
let totalSlides = slides.length; // Klonlangan slaydni ham hisobga olamiz
let slideInterval;

// Slaydlarni harakatlantirish funksiyasi
function moveToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Keyingi slaydga o'tish funksiyasi
function nextSlide() {
    currentIndex++;

    if (currentIndex === totalSlides) {
        // Oxirgi slayddan keyin birinchi slaydga tezkor o'tish
        slidesContainer.style.transition = 'none'; // Animatsiyani vaqtinchalik o'chiramiz
        currentIndex = 0; // Birinchi slaydga qaytamiz
        moveToSlide(currentIndex); // Birinchi slaydga o'tamiz

        setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out'; // Animatsiyani qayta yoqamiz
            currentIndex++; // Keyingi slaydga o'tamiz
            moveToSlide(currentIndex);
        }, 50); // Tezkor qaytishdan keyin kichik pauza
    } else {
        moveToSlide(currentIndex); // Keyingi slaydga o'tamiz
    }
}

// Intervalni boshlash
function startInterval() {
    slideInterval = setInterval(nextSlide, 3000); // Har 3 soniyada slayd almashinadi
}

// Sahifa yuklanganda slayderni ishga tushirish
window.onload = () => {
    startInterval();
};
