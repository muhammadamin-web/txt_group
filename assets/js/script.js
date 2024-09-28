document.addEventListener('DOMContentLoaded', function () {
    // Slayderni initsializatsiya qilish
    var slider = new SimpleAdaptiveSlider('.slider', {
      loop: true,        // Loopingni yoqamiz, oxiridan keyin boshidan boshlaydi
      autoplay: true,    // Avtomatik o'tish
      interval: 4000,    // Har 4 sekundda o'tadi
      swipe: true,       // Swipe harakati faollashtirilgan
    });
  });
  