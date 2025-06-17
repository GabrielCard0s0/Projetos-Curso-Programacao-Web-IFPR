let n = Number(prompt("Digite um número inteiro para calcular o fatorial:"));

if (n >= 0) {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  alert("O fatorial de " + n + " é: " + fatorial);
}