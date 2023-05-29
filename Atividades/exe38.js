/*
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function impares(início, fim){
    if(início != 0 || fim != 100){
        início = 0 
        fim = 100
        return
    }
    for(i=0; i<fim; i++){
        if(i%2 != 0){
            console.log(i)
        }
        else{
            console.log("par")
        }
    }
}

impares(0,100)