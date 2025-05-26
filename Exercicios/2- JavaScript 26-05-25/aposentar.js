let idade = Number(prompt('Insira sua idade: '))

let idadeMinima = 65

let calculo = idadeMinima - idade

if(idade >= 65){
    console.log(`Você ja pode se aposentar`)
}else{
    console.log(`Faltam ${calculo} anos para você se aposentar;`)
}