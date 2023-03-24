//Faça um Programa que receba como entrada quanto você 
//ganha por hora e o número de horas trabalhadas no mês. Calcule 
//e mostre o total do seu salário no referido mês, sabendo-se que 
//são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% 
//para o sindicato, faça um programa que nos dê:
let exercicio = require('./index');

(async() => {
  const salarioHora = await exercicio("Digite seu salário por hora: ");
  const horasTrabalhadas = await exercicio("Digite o número de horas trabalhadas no mês: ");
  const salarioBruto = salarioHora * horasTrabalhadas;
  const ir = salarioBruto * 0.11;
  const sindicato = salarioBruto * 0.05;
  const inss = salarioBruto * 0.08;
  const salarioLiquido = salarioBruto - (salarioBruto * 0.11) - (salarioBruto * 0.08) - (salarioBruto * 0.05);
  console.log(`Imposto de Renda: ${ir.toFixed(2)}`);
  console.log(`INSS: ${inss.toFixed(2)}`);
  console.log(`Sindicato: ${sindicato.toFixed(2)}`);
  console.log(`Salário Bruto: ${salarioBruto.toFixed(2)}`);
  console.log(`Salário Líquido: ${salarioLiquido.toFixed(2)}`);
})();
  