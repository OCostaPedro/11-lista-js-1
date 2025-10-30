/**** Escreva o código abaixo 👇******/
// Questão 1 - Soma
function somar(a, b) {
  return a + b;
}

// Questão 2 - Multiplicação
function multiplicar(a, b) {
  return a * b;
}

// Questão 3 - Subtração
function subtrair(a, b) {
  return a - b;
}

// Questão 4 - Divisão com verificação
function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero";
  } else {
    return a / b;
  }
}

// Questão 5 - Média
function calcularMedia(n1, n2, n3, n4) {
  let soma = somar(somar(n1, n2), somar(n3, n4));
  return dividir(soma, 4);
}

// Questão 6 - Exponenciação
function elevarPotencia(base, expoente) {
  let resultado = 1;
  for (let i = 0; i < expoente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

// Questão 7 - Área do Retângulo
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

// Questão 8 - Par ou Ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

// Questão 9 - Raiz Quadrada
function calcularRaizQuadrada(numero) {
  if (numero < 0) return "Erro: número negativo";
  let raiz = numero / 2;
  let temp = 0;
  // método de aproximação (método de Newton)
  while (raiz !== temp) {
    temp = raiz;
    raiz = (numero / temp + temp) / 2;
  }
  return raiz;
}

// Questão 10 - Hipotenusa
function calcularHipotenusa(cateto1, cateto2) {
  let somaQuadrados = somar(
    elevarPotencia(cateto1, 2),
    elevarPotencia(cateto2, 2)
  );
  return calcularRaizQuadrada(somaQuadrados);
}
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
