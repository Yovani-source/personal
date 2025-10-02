const canvas = document.getElementById("espacio");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrellas = [];

for (let i = 0; i < 200; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radio: Math.random() * 2,
    velocidad: Math.random() * 0.5 + 0.2
  });
}

function dibujarEstrellas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  estrellas.forEach((estrella) => {
    ctx.beginPath();
    ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
    ctx.fill();

    estrella.y += estrella.velocidad;

    if (estrella.y > canvas.height) {
      estrella.y = 0;
      estrella.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(dibujarEstrellas);
}

dibujarEstrellas();
