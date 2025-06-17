let n = Number(prompt("Digite a quantidade de números (n) para o cálculo da média:"));

if (n >= 0) {
  let soma = 0;

  for (let i = 0; i < n; i++) {
    soma = soma + i;
  }
  
  let media = soma / n;
  
  alert("A média dos " + n + " primeiros números naturais é: " + media);
  
} else {

  alert("Valor inválido. Por favor, digite um número inteiro e positivo.");
  
}