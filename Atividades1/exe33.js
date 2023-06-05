/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInt = [1,2,3,4]
let vetorString = ["eu","tu","nós"]
let vetorDouble = [1.2,1.4,1.5,1.8]

function juntada(v1,v2,v3){
    let vetorContac = v1.concat(v2,v3)
    console.log(vetorContac)
}

juntada(vetorInt,vetorString,vetorDouble)
juntada(vetorDouble,vetorInt,vetorString)