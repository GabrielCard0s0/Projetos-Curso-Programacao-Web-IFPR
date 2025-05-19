let produto1 = 45;
let produto2 = 30;
let produto3 = 25;

let soma = produto1 + produto2 + produto3;

let imposto = (soma * 10) / 100;

let valorTotal = soma + imposto

console.log(`O valor da compra é de R$${soma}. Com imposto de 10% equivalente a R$${imposto}, o valor total é: R$${valorTotal}.` )