/*
   Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
   A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
   Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
   Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
*/

const randomNumber = Math.floor(Math.random() * 10) + 1;

let intentos = 3;
let respuesta = 0;

while (intentos != 0) {
  respuesta = parseInt(prompt("Ingrese un número entre 1 y 10 para adivinar"));

  if (respuesta === randomNumber) {
    alert("¡Felicidades! Acertaste el número");
    break;
  } else {
    intentos--;
    alert(`Qué mal, no acertaste. Te quedan ${intentos} intentos`);

    if (intentos === 0) {
      alert(`Te quedaste sin intentos, el número era ${randomNumber}`);
      break;
    }
  }
}
