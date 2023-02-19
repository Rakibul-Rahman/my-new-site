// @ts-nocheck

// const sliderCards = document.querySelectorAll(".slider-inner .slider-card");
// const dots = document.querySelectorAll(".slider-indicators li");
// const indicators = document.getElementById("slider-indicators");

// indicators?.addEventListener("click", (event) => {
//   if (event.target.tagName !== "LI") return;
//   const clickedDot = event.target;

//   const isActiveDot =
//     clickedDot.classList.contains("active") || clickedDot.closest(".active");

//   if (!isActiveDot) {
//     const activeDot = document.querySelector("li.active");
//     const activeCard = document.querySelector(".slider-card.active");
//     const dotIndex = Array.from(indicators.children).indexOf(clickedDot);
//     const nextActiveCard = sliderCards[dotIndex];
//     activeDot.classList.remove("active");
//     clickedDot.classList.add("active");
//     activeCard.classList.remove("active");
//     nextActiveCard.classList.add("active");
//   }
// });

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
});
