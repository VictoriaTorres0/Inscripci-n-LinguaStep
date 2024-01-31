function primeraVista() {
  const ocultarPrimeraVista = document.getElementById("primera-vista");
  const mostrarSegundaVista = document.getElementById("segunda-vista");
  ocultarPrimeraVista.style.display = "none";
  mostrarSegundaVista.style.display = "flex";
}

function segundaVista() {
  const ocultarSegundaVista = document.getElementById("segunda-vista");
  const mostrarTerceraVista = document.getElementById("tercera-vista");
  ocultarSegundaVista.style.display = "none";
  mostrarTerceraVista.style.display = "flex";
}

function terceraVista() {
  const ocultarTerceraVista = document.getElementById("tercera-vista");
  const mostrarCuartaVista = document.getElementById("cuarta-vista");
  ocultarTerceraVista.style.display = "none";
  mostrarCuartaVista.style.display = "block";
}
