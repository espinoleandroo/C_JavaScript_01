//Programar el juego del "Número Mágico"
//en el que se define un número y el usuario
//trata de adivinarlo, si el número que
//ingresó el usuario es menor, imprimir la
//pista "El número mágico es mayor", si el
//número que ingresó el usuario es mayor,
//imprimir la pista "El número mágico es menor"

let nm = 11;
let n;
do {
  n = prompt();
  if(n > nm){
    console.log("El número mágico es menor");
  }else if (n < nm) {
    console.log("El número mágico es mayor");
  }else {
    break;
  }
} while (true);
