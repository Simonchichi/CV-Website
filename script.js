const container = document.querySelector(".lucas-container"); //Ändra på namnet den har

window.addEventListener("scroll", () => {
  const distance = window.scrollY;
  container.style.transform = `translateY(${distance * 0.4}px)`;
});
