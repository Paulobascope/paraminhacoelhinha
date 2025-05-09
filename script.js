// script.js
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

function togglePlay() {
  const audio = document.getElementById("bgMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
