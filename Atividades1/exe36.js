/* 
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let vetor = [1, 2, 3, 4, 5, 7]
let numero = 7

function xesque(vetorInt, num){
    let vetorFinal = []
    
    for(let i = 0; i < vetorInt.length; i++){
        vetorFinal[i] = vetorInt[i]*num
    }
    return vetorFinal
}

function delhe(vetorInt, num){
    let vetorFinal = []
    
    for(let i = 0; i < vetorInt.length; i++){
        if(vetorInt[i] > 5){
            vetorFinal[i] = vetorInt[i]*num
        }
        else{
            vetorFinal[i] = vetorInt[i]
        }      
    }
    return vetorFinal
}

console.log(xesque(vetor, numero))
console.log(delhe(vetor, numero))