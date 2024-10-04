const slidesContainer = document.querySelector('.slides-container');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function moveSlider() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    slidesContainer.style.transition = 'none'; // Animatsiyani olib tashlaymiz
    slidesContainer.style.transform = `translateX(0)`; // Birinchi slaydgacha qaytaramiz
    currentIndex = 1; // Yana keyingi slayddan boshlaymiz
    setTimeout(() => {
      slidesContainer.style.transition = 'transform 0.5s ease-in-out'; // Animatsiyani qaytaramiz
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 20); // O‘tish jarayonini qayta yuklaymiz
  } else {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

setInterval(moveSlider, 3000);