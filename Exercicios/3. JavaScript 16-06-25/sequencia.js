let quantidade = Number(prompt("Quantos números você vai digitar?"));

if (quantidade > 0 && (quantidade >= 0 || quantidade < 0)) {
  let positivos = 0;
  let negativos = 0;
  let zeros = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numeroAtual = Number(prompt("Digite o " + i + "º número:"));

    if (numeroAtual > 0) {
      positivos = positivos + 1;
    }

    if (numeroAtual < 0) {
      negativos = negativos + 1;
    }

    if (numeroAtual === 0) {
      zeros = zeros + 1;
    }
  }

  alert("Total de números analisados:\n" +"Positivos: " +positivos +"\n" +"Negativos: " +negativos +"\n" +"Zeros: " + zeros);
}