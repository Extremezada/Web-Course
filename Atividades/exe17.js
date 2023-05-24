/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(plano, salario){
    let x = 0
    switch(plano){
        case "a":
            x = salario
            salario *= 0.1
            return x + salario
            break;
        case "b":
            x=salario
            salario *= 0.15
            return x + salario
            break;
        case "c":
            x = salario
            salario *= 0.2
            return x + salario
            break;
        default:
            return "Plano inválido"
    }
}

console.log(aumento("s", 100))