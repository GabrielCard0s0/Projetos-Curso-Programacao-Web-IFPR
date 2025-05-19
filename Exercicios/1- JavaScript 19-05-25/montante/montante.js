let valor = 1000;
let taxa = 0.005; // 0,5% ao mês
let meses = 6;

for (let i = 0; i < meses; i++) {
  valor += valor * taxa;
}

console.log("Valor após 6 meses: R$ " + valor.toFixed(2));
