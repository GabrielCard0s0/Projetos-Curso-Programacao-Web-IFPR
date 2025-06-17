let numero1 = Number(prompt(`Insira o primeiro numero:`))
let numero2 = Number(prompt(`Insira o segundo numero:`))

let aux = numero1

numero1 = numero2
numero2 = aux

window.log(`O primeiro numero foi trocado pelo segundo, e agora é ${numero1}. E o segundo numero agora ${numero2}`)