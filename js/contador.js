const fechaInicio = new Date("2025-01-09T00:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio; // tiempo pasado

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

