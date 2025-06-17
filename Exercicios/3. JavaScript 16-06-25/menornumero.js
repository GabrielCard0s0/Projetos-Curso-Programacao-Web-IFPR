let n = prompt(`Digite a quantidade de numeros: `);


for(let i = 1; i <= n; i++) {
    let numeroAtual = prompt(`Informe o ` + i + `º numero: `);
    let menorValor = numeroAtual;
    if(numeroAtual < menorValor) {
        menorValor = numeroAtual
    }
}
alert(`O menor valor informado foi: ` + menorValor);