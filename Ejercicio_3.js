//Imprimir la sucesión fibonacci el número de veces que indicó el usuario

let n = prompt();
let a = 0;
let b = 1;
let c;

for (var i = 0; i < n; i++) {
  console.log(a);
  c = a+b;
  a = b;
  b = c;
}
