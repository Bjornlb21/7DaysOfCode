/* 
Crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista: banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:

Lista de compras:

Frutas: banana, tomate, manzana, uva, aguacate

Lácteos: leche vegetal, leche de vaca, leche en polvo

Congelados: 

Dulces: chicle y gominola
*/

const fruits = [],
  dairy = [],
  frozen = [],
  sweets = [],
  cereals = [];

let answer = "si";

let option = 0;

const categories = (foodItem) => foodItem.toString().replaceAll(",", ", ");

while (answer != "no") {
  answer = prompt("¿Deseas agregar un alimento a tu lista de compras? Responde 'Si' o 'No'.");

  while (answer.toLowerCase() !== "no" && answer.toLowerCase() !== "si") {
    alert("Opción no reconocida");
    answer = prompt("¿Deseas agregar un alimento a tu lista de compras? Responde 'Si' o 'No'.");
  }

  if (answer.toLowerCase() === "no") break;

  let food = prompt("¿Qué alimento deseas agregar? Ingresa el nombre");

  option = parseInt(prompt("¿A qué categoria pertenece el alimento? \n 1- Frutas \n 2- Lácteos \n 3- Congelados \n 4- Dulces \n 5- Cereales"));

  switch (option) {
    case 1:
      fruits.push(food);
      break;

    case 2:
      dairy.push(food);
      break;

    case 3:
      frozen.push(food);
      break;

    case 4:
      sweets.push(food);
      break;
    case 5:
      cereals.push(food);
      break;
    default:
      alert("Opción incorrecta");
      break;
  }
}

alert(
  `Lista de compras: \n\n Frutas: ${categories(
    fruits
  )} \n\n Lácteos: ${categories(dairy)} \n\n Congelados: ${categories(
    frozen
  )} \n\n Dulces: ${categories(sweets)} \n\n Cereales: ${categories(cereals)}`
);
