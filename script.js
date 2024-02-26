document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll(".slider img");
  slides[currentSlide].style.display = "block";
  function showNextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  setInterval(showNextSlide, 5000);
});

// const skillsSection = document.getElementById("skills-section");
// const progressBars = document.querySelectorAll(".progress-bar");

// function showProgress() {
//   progressBars.forEach((progressBar) => {
//     const value = progressBar.dataset.progress;
//     progressBar.style.opacity = 1;
//     progressBar.style.width = `${value}%`;
//   });
// }
// function hideProgress() {
//   progressBars.forEach((p) => {
//     p.style.opacity = 0;
//     p.style.width = 0;
//   });
// }
// window.addEventListener("scroll", () => {
//   const sectionPos = skillsSection.getBoundingClientRect().top;
//   const screenPos = window.innerHeight;
//   if (sectionPos < screenPos) {
//     showProgress();
//   } else {
//     hideProgress();
//   }
// });
