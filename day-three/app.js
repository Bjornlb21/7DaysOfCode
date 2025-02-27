/* Crear los destinos posibles de un juego, en el que el usuario pueda elegir:

   1- Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
  
   2- Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
   
   3- Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
 
   4- Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

let respuestaContinua = '';
let respuesta = prompt('¿Qué área deseas seguir Front-End o Back-End?');
let respuestaEspOFullS = '';
let front = '';
let back = '';
let backOrFront = '';

if (respuesta === 'Front-End' || respuesta === 'Front') {
  front = prompt('¿Quieres aprender React o Vue?');
  backOrFront = front;
} else if (respuesta === 'Back-End' || respuesta === 'Back') {
  back = prompt('¿Quieres aprender C# o Java?');
  backOrFront = back;
} else {
  alert('Solo se puede ingresar Front-End o Back-End');
}

respuestaEspOFullS = prompt(`Elegiste ${backOrFront} ¿Te gustaría especializarte en ${respuesta}-End o desarrollarte para ser Fullstack?`);

if (respuestaEspOFullS === 'Front') {
  alert(`¡Genial! Te enfocarás en especializarte en ${respuesta}-End con ${backOrFront}.`);
} else if (respuestaEspOFullS === 'Fullstack' || respuestaEspOFullS === 'Full') {
  alert(`¡Genial! Te enfocarás en desarrollarte como Fullstack`);
} else {
  alert('Solo se puede ingresar Back, Front o Full');
}

while (respuestaContinua !== 'No') {
  respuestaContinua = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Ingrese No para terminar');

  if (respuestaContinua === 'JavaScript') {
    alert(
      'JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.'
    );
  } else if (respuestaContinua === 'Python') {
    alert(
      'Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes.'
    );
  } else if (respuestaContinua === 'Ruby') {
    alert(
      'Ruby es un lenguaje de programación interpretado y de alto nivel. Fue diseñado en la década de 1990 por Yukihiro Matsumoto en Japón con el objetivo de crear un lenguaje más equilibrado y agradable para el programador, centrándose en la simplicidad y la eficiencia en la escritura de código.'
    );
  }

  if (respuestaContinua === 'No') {
    break;
  }
}
