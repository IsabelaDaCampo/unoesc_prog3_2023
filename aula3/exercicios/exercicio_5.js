//Os números primos possuem várias aplicações dentro da Computação, por 
//exemplo na Criptografia. Um número primo é aquele que é divisível apenas por 
//um e por ele mesmo. Faça um programa que peça um range (ex. 1, 20) e liste 
//todos os números primos que existem entre esses dois números

let exercicio = require('./index');

(async() => {
  let minRange = await exercicio("Digite um range inicial: ");
  let maxRange = await exercicio("Digite um range final: ");
  if(maxRange < minRange) {
    console.log("O range final deve ser maior que o inicial");
    return
  }
  let primos = [];
  for(let i = minRange; i <= maxRange; i++) {
    let divisores = 0;
    for(let j = 1; j <= i; j++) {
      if(i % j == 0) {
        divisores++;
      }
    }
    if(divisores == 2) {
      primos.push(i);
    }
  }
  console.log(`Números primos entre ${minRange} e ${maxRange}: ${primos.join(', ')}`);
})();