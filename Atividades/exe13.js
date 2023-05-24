/* 
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
let dia
function queDiaDaSemana(dia){
    switch(dia){
        case 0:
            console.log("Dia inválido")
            break;
        case 1:
            console.log("Domingo é fim de semana")
            break;
        case 2:
            console.log("Segunda é dia util")
            break;
        case 3:                
            console.log("Terça é dia útil")
            break;
        case 4:
            console.log("Quarta é dia útil")
            break;
        case 5:
            console.log("Quinta é dia útil")
            break;
        case 6:
            console.log("Sexta é dia útil")
            break;
        case 7:
            console.log("Sabado é fim de semana")
            break;
        case 8:
            console.log("Dia inválido")
            break;    
    }
}

queDiaEh(0)


