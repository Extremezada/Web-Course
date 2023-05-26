/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

let vetor = [1,8,16,14,12,18,20,21]
let tamanho = vetor.length

function contVetor(vetor){
    for(let i=0; i < tamanho; i++){
        if(vetor[i]>=10 && vetor[i]<=20){
            console.log("Os números dentro do intervalo 10,20 são: " + vetor[i])
        }
        else{
            console.log("O numeros fora do intervalo 10,20 são:" + vetor[i])
        }
    }
}

contVetor(vetor)