/* 
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

const vetor = [1,2,3,12,5,9]

function maiorMenor(vetor){
    maior = vetor[0]
    menor = vetor[0]

    for(let i=1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        } 
        else if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return console.log("O menor é: "+ menor + "\nO maior é: " + maior)
}

maiorMenor(vetor)