// Crie um programa que lê um arquivo com 3 valores separados por ‘,’ (a,b,c) que representam elementos de uma função de terceiro grau. Apresente as raízes.

const fs = require('fs').readFileSync('exercicio_1.txt', 'utf-8');
let [a, b, c] = fs.split(',').map(Number);

let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
  console.log('Não há raízes reais');
} else if (delta === 0) {
  let x = -b / (2 * a);
  console.log(`A raiz é ${x}`);
} else if( delta > 0){
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`As raízes são ${x1} e ${x2}`);
} else {
  console.log('Não foram encontrados valores para a, b e c')
}