/* Debe pedir al usuario responder 3 preguntas:
   - ¿Cuál es tu nombre?
   - ¿Cuántos años tienes?
   - ¿Qué lenguaje de programación estás estudiando?
*/

/* Opcional
   Preguntar: ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

   Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
   
   1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
   2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

const container = document.querySelector("div");
const nombre = document.getElementById("name");
const edad = document.getElementById("age");
const lenguaje = document.getElementById("languaje");
const country = document.getElementById('country');
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", () => {
  if (nombre.value == "" || edad.value == "" || lenguaje.value == "" || country.value == '') {
    nombre.placeholder = "Debes ingresar un nombre";
    edad.placeholder = "Debes ingresar una edad";
    lenguaje.placeholder = "Debes ingresar un lenguaje";
    country.placeholder = 'Debes ingresar una ciudad'
    return;
  }

  container.innerHTML = `<p class="message">Hola<span class="spanName"> ${nombre.value}</span>, eres de <span class="spanCountry">${country.value}</span>, tienes<span class="spanAge"> ${edad.value}</span> años y ya estas aprendiendo<span class="spanLanguaje"> ${lenguaje.value}</span></p>
  <label for="answer" class="label answer">¿Te gusta estudiar ${lenguaje.value}? 1 para SÍ o 2 para NO.</label>
  <input id="answer" type="text" class="input" />
  <button class="send" id="sendAnswer">Enviar</button>`;

  const answerBtn = document.getElementById("sendAnswer");

  answerBtn.addEventListener("click", () => {
    let option = document.getElementById("answer");
    const optionParse = parseInt(option.value);
    if (optionParse === 1) {
      container.innerHTML = `<p class="message answer">¡Muy bien! Sigue estudiando y tendrás mucho éxito</p>`;
    } else if (optionParse === 2) {
      container.innerHTML = `<p class="message answer">Oh, qué pena... Intenta aprender otros lenguajes :D</p>`;
    } else {
      option.value = "";
      option.focus();
      option.placeholder = "Opción incorrecta";
    }
  });
});
