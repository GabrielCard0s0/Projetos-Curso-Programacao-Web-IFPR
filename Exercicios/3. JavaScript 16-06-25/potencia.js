let base = Number(prompt("Informe o número da base:"));
let expoente = Number(prompt("Informe o número do expoente:"));

if ((base >= 0 || base < 0) && (expoente >= 0 || expoente < 0)) {
  let resultado = 1;

  if (expoente >= 0) {
    for (let i = 0; i < expoente; i++) {
      resultado = resultado * base;
    }
    alert(base + " elevado a " + expoente + " é: " + resultado);
    }
}