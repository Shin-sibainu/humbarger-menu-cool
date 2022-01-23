const page = document.querySelector(".page");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  page.classList.toggle("rotate");
});
