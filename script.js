const clickable = document.querySelector(".site-header-title");
const target = document.querySelector(".site-content-page-header");

clickable.addEventListener("click", () => {
    target.classList.toggle("drop-down");
});