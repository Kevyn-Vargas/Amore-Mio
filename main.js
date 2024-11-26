// script.js

let isMenuOpen = false;

function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    isMenuOpen = true;
  } else {
    menu.classList.add("hidden");
    isMenuOpen = false;
  }
}

document.addEventListener("click", (event) => {
  const menu = document.getElementById("dropdown-menu");
  const menuButton = document.querySelector(".menu-button");

  if (
    isMenuOpen &&
    !menu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    toggleMenu()
    menu.classList.add("hidden");
    isMenuOpen = false;
  }
});
