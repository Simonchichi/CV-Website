const container = document.querySelector(".Ice");

window.addEventListener("scroll", () => {
  const distance = window.scrollY;
  container.style.transform = `translateY(${distance * 0.4}px)`;
});
