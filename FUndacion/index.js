window.addEventListener("scroll", function() {
    var menu = document.getElementById("menu");
    
    if (window.pageYOffset > 0) {
      menu.style.backgroundImage = "none";
    } else {
    menu.style.backgroundColor =  red; /* Reemplaza "imagen-fondo.jpg" con la URL de tu imagen de fondo */
    }
  });