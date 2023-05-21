window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const contenedor = document.querySelector('.container');
  header.classList.toggle("abajo", window.scrollY > 50);
  contenedor.classList.toggle("abajo", window.scrollY > 50);
});