//Criando uma funcão
function imprimirSoma(a,b,c,d){

    console.log(a+b+c+d)

}
imprimirSoma(1,2,3,4)

// Funcão em forma de variável

const soma = function(a,b){
    console.log(a+b)
}

soma(2,3)

//Funcão arrow

const adic = (a,b) => {
    return a + b
}

console.log(adic(1,2))

//Retorno implicito 

const subtract = (a,b) => a-b

console.log(subtract(4,5))