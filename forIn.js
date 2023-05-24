
const notas = [1.2, 4.2, 5.5, 7.2]



for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Pedro",
    sobrenome: "Dalmagro",
    idade: 37,
    peso: 72
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}