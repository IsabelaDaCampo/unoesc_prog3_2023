//Uma academia deseja fazer um senso entre seus clientes para descobrir o 
//mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer 
//um programa recebe como entrada um arquivo que contem uma lista (código,  
//altura e peso) uma pessoa por linha. O final da digitação de dados deve ser 
//dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o 
//programa também deve ser informados os códigos e valores do cliente mais 
//alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas 
//e dos pesos dos clientes.

var readLine = require('readline').createInterface({
  input: require('fs').createReadStream('exercicio_6.txt')
});

let gordo = 0, magro = 0, alto = 0, baixo = 0, soma_altura = 0, soma_peso = 0, linha = 0, id_gordo = 0, id_magro = 0, id_alto = 0, id_baixo = 0;

readLine.on('line', (line) => {
  let valores = line.split(',');
  if(valores[0] == 0) {
    console.log(`O cliente mais gordo é o ${id_gordo} com ${gordo}kg`);
    console.log(`O cliente mais magro é o ${id_magro} com ${magro}kg`);
    console.log(`O cliente mais alto é o ${id_alto} com ${alto}cm`);
    console.log(`O cliente mais baixo é o ${id_baixo} com ${baixo}cm`);
    console.log(`A média de altura é ${(soma_altura/linha).toFixed(2)}cm`);
    console.log(`A média de peso é ${(soma_peso/linha).toFixed(2)}kg`);
    readLine.close();
  } else {
    console.log(`Linha ${linha}: ${valores}`);
    if(valores[2] > gordo) {
      gordo = valores[2];
      id_gordo = valores[0];
    }
    
    if(valores[2] < magro || magro == 0) {
      magro = valores[2];
      id_magro = valores[0];
    }
    if(valores[1] > alto) {
      alto = valores[1];
      id_alto = valores[0];
    }

    if(valores[1] < baixo || baixo == 0) {
      baixo = valores[1];
      id_baixo = valores[0];
    }
        
    soma_altura += valores[1];
    soma_peso += valores[2];
    linha++;
  }
});