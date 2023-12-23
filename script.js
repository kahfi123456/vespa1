// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika vespa menu di klik
document.querySelector("#vespa-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const vespa = document.querySelector("#vespa-menu");

document.addEventListener("click", function (e) {
  if (!vespa.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
