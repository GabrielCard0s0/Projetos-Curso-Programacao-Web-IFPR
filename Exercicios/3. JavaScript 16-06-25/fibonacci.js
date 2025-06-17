let n = Number(prompt("Quantos termos da sequência de Fibonacci você quer exibir?"));

if (n > 0) {
  if (n === n) {
    let termoAnterior = 0;
    let termoAtual = 1;
    let sequenciaTexto = "";

    for (let i = 0; i < n; i++) {
      sequenciaTexto = sequenciaTexto + termoAnterior;

      let proximoTermo = termoAnterior + termoAtual;
      termoAnterior = termoAtual;
      termoAtual = proximoTermo;

      if (i < n - 1) {
        sequenciaTexto = sequenciaTexto + ", ";
      }
    }

    alert("Os " + n + " primeiros termos da sequência de Fibonacci são:\n" + sequenciaTexto);
  }
}