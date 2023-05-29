/* 
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

function troca(vetor1, vetor2){
    
    for(i = 0; i < 5; i++){
        vetor1[i] = vetor1[i] + vetor2[i];
        vetor2[i] = vetor1[i] - vetor2[i];
        vetor1[i] = vetor1[i] - vetor2[i];
    }
    console.log(vetor1,"\n", vetor2)
}

troca(vetorA, vetorB)
