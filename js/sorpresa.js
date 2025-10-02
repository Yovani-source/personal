const warp = document.getElementById("warp");
const btn = document.getElementById("startBtn");
const mainScreen = document.getElementById("mainScreen");
const destination = document.getElementById("destination");
const backBtn = document.getElementById("backBtn");

let stars = [];
let traveling = false;

// Crear estrellas
function createStars(count) {
  for (let i = 0; i < count; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    let size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    warp.appendChild(star);
    stars.push({ el: star, x: parseFloat(star.style.left), y: parseFloat(star.style.top) });
  }
}

// Animación estrellas
function animateStars() {
  stars.forEach(star => {
    if (traveling) {
      star.x += (star.x - window.innerWidth / 2) * 0.05;
      star.y += (star.y - window.innerHeight / 2) * 0.05;
      star.el.style.left = star.x + "px";
      star.el.style.top = star.y + "px";

      if (star.x < 0 || star.x > window.innerWidth || star.y < 0 || star.y > window.innerHeight) {
        star.x = window.innerWidth / 2;
        star.y = window.innerHeight / 2;
      }
    }
  });
  requestAnimationFrame(animateStars);
}

// Botón viajar
btn.addEventListener("click", () => {
  traveling = true;
  btn.disabled = true;
  btn.textContent = "🌠 Viajando...";

  setTimeout(() => {
    mainScreen.style.display = "none";   // ocultamos pantalla principal
    destination.style.display = "block"; // mostramos pantalla destino
    traveling = false;
  }, 2000);
});

// Botón volver
backBtn.addEventListener("click", () => {
  destination.style.display = "none"; // ocultamos pantalla destino
  mainScreen.style.display = "block"; // mostramos pantalla inicial
  btn.disabled = false;
  btn.textContent = "🌌 VIAJAR 🚀";
});

createStars(200);
animateStars();

