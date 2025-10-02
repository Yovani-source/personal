const puzzle = document.getElementById("puzzle");
const mensajeFinal = document.getElementById("mensajeFinal");

// Imagen para el rompecabezas
const imagen = "prueba/descarga.jpg"; // 👈 cambia a tu foto
const size = 3; // 3x3
let piezas = [];

// Crear piezas
for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    const pieza = document.createElement("div");
    pieza.classList.add("pieza");
    pieza.style.backgroundImage = `url(${imagen})`;
    pieza.style.backgroundPosition = `-${col * 120}px -${row * 120}px`;
    pieza.dataset.correct = row * size + col;
    piezas.push(pieza);
  }
}

// Mezclar piezas
piezas.sort(() => Math.random() - 0.5);

// Pintar piezas
piezas.forEach(p => puzzle.appendChild(p));

// Lógica de intercambio
let seleccionada = null;

puzzle.addEventListener("click", e => {
  if (!e.target.classList.contains("pieza")) return;

  if (!seleccionada) {
    seleccionada = e.target;
    seleccionada.style.border = "3px solid red";
  } else {
    // Intercambiar posiciones
    let temp = document.createElement("div");
    puzzle.insertBefore(temp, seleccionada);
    puzzle.insertBefore(seleccionada, e.target);
    puzzle.insertBefore(e.target, temp);
    puzzle.removeChild(temp);

    seleccionada.style.border = "2px solid #b3005e";
    seleccionada = null;

    // Verificar si está completo
    verificarGanador();
  }
});

// Verificar si el rompecabezas está armado
function verificarGanador() {
  const piezasActuales = [...puzzle.children];
  let correcto = true;
  piezasActuales.forEach((pieza, index) => {
    if (parseInt(pieza.dataset.correct) !== index) {
      correcto = false;
    }
  });

  if (correcto) {
    mensajeFinal.innerHTML = "🎉 ¡Lo lograste! Nuestro rompecabezas está completo 💖";
  }
}
