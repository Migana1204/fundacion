window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const contenedor = document.querySelector(".container");
  header.classList.toggle("abajo", window.scrollY > 50);
  contenedor.classList.toggle("abajo", window.scrollY > 50);
}); 

// animacion de las cartas de informacion// 

const infoCans = document.querySelectorAll(".Info-Can");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const fadeIn = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(fadeIn, options);

infoCans.forEach((infoCan) => {
  observer.observe(infoCan);
});
