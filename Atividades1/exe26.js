/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function pares(){
    n=1
    while(n<=100){
        if(n%2 == 0){
            console.log(n)
            n++
        }
        else{
            n++
        }
    }
}
pares()