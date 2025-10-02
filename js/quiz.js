function calcularResultado() {
  let puntos = 0;

  // Respuestas correctas
  const respuestas = {
    q1: "comer",
    q2: "verdadero",
    q3: "tu",
    q4: "verdadero",
    q5: "feliz"
  };

  // Recorremos las preguntas
  for (let i = 1; i <= 5; i++) {
    let pregunta = document.querySelector(`input[name="q${i}"]:checked`);
    if (pregunta && pregunta.value === respuestas[`q${i}`]) {
      puntos += 20;
    }
  }

  // Mostramos el resultado
  let mensaje = "";
  if (puntos <= 20) {
    mensaje = `Obtuviste ${puntos} puntos 😢`;
  } else if (puntos <= 60) {
    mensaje = `Obtuviste ${puntos} puntos 🙂`;
  } else {
    mensaje = `Obtuviste ${puntos} puntos 😍`;
  }

  document.getElementById("resultado").innerHTML = mensaje;
}
