/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(n1, operador, n2){
    switch(operador){
        case "+":
            return n1+n2
            break;
        case "-":
            return n1-n2
            break;
        case "*":
            return n1*n2
            break;
        case "/":
            return n1/n2
            break;
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(1, 2, 4))