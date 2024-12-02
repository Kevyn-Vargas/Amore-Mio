// script.js

function toggleMenu() {
  const sideMenu = document.getElementById('side-menu');
  sideMenu.classList.toggle('open');
  sideMenu.classList.toggle('hidden');
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', (event) => {
  const sideMenu = document.getElementById('side-menu');
  const menuButton = document.querySelector('.menu-button');

  if (
    !sideMenu.contains(event.target) && // Si el clic no es dentro del menú
    !menuButton.contains(event.target) && // Y no es en el botón
    sideMenu.classList.contains('open') // Y el menú está abierto
  ) {
    toggleMenu();
  }
});

// Cambiar fondo al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});