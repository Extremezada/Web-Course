/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function pAritmética(n, a1, r){
    let total = a1

    for(i=1; i <= n; i++){
        total += r
    }
    return total
}

function pGeométrica(n, a1, r){
    let total = a1

    for(i=1; i <= n; i++){
        total *= r
    }
    return total
}

console.log(pAritmética(10, 0, 2))
console.log(pGeométrica(10, 1, 2))