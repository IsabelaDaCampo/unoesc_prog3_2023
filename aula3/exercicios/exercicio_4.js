//Supondo que a população de um país A seja da ordem de 80000 habitantes 
//com uma taxa anual de crescimento de 3% e que a população de B seja 200000 
//habitantes com uma taxa de crescimento de 1.5%. Faça um programa que 
//calcule e escreva o número de anos necessários para que a população do país 
//A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento

  let populacaoA = 80000;
  let populacaoB = 200000;
  const crescimentoA = 0.03;
  const crescimentoB = 0.015;
  let anos = 0;
  while (populacaoA < populacaoB) {
    populacaoA += populacaoA * crescimentoA;
    populacaoB += populacaoB * crescimentoB;
    anos++;
  }
  console.log(`Serão necessários ${anos} anos para que a população A ultrapasse a população B.`);
