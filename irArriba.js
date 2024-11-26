// Mostrar u ocultar el botón según el scroll
window.onscroll = function() {
  var botonArriba = document.querySelector('.ir-arriba');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    botonArriba.style.display = "block"; // Mostrar el botón
  } else {
    botonArriba.style.display = "none";  // Ocultar el botón
  }
};

// Función para hacer scroll hacia arriba
document.querySelector('.ir-arriba').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Desplazamiento suave hacia arriba
});