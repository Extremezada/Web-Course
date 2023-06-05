/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function notas(n){
    if(n >= 0.0 && n <= 4.9){
        console.log("D")
    }
    else if(n >= 5.0 && n <= 6.9){
        console.log("C")
    }
    else if(n >= 7.0 && n <= 8.9){
        console.log("B")
    }
    else{
        console.log("A")
    }
}


notas(8.3)