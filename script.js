alert("Recuerda que tienes 120 minutos para hacer el examen");
let nombre = prompt("Cual es tu nombre?");
let nota = Number(prompt("Que nota te sacaste?"));
let horasEstudiadas = prompt("Cuantas horas estudiaste para el examen?");

function calificacion() {
  switch (true) {
    case nota >= 90 && nota <= 100:
      alert(`Hola ${nombre}! Tu puntuación es A, Sobresaliente!`);
      break;
    case nota >= 80 && nota <= 89:
      alert(`Hola ${nombre}! Tu puntuación es B, Notable!`);
      break;
    case nota >= 70 && nota <= 79:
      alert(`Hola ${nombre}! Tu puntuación es C, Suficiente!`);
      break;
    case nota >= 60 && nota <= 69:
      alert(`Hola ${nombre}! Tu puntuación es D, Insuficiente!`);
      break;
    case nota >= 1 && nota <= 59:
      alert(`Hola ${nombre}! Tu puntuación es F, Insuficiente!`);
      break;
    default:
      alert(`Esa nota no es correcta`);
  }
}

calificacion();

for (let i = 120; i >= 0; i--) {
  console.log(i + " minutos");
}
console.log("El tiempo de la prueba se ha acabado");
