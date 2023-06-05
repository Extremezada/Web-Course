/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
*/

let vetor = [1,2,3,4,5,6]

function maiorMenor(vetor){
    soma=0
    for(let i=0; i < vetor.length; i++){
        soma += vetor[i]
    }
    console.log(soma)
}

maiorMenor(vetor)