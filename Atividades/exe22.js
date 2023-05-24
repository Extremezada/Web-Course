/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

// m = capital*(1+juros)**tempo

function jurosComp(mes, anuidade){
    let x = 0
    let saldo=anuidade
    if(mes > 1){
        juros = 0.05
        for(let i = mes; i > 1; i--){
            saldo += saldo*juros
        }
        console.log("O valor é de: " + saldo.toFixed(2))
    }
    else{
        console.log("O valor é de: " + saldo.toFixed(2))
    }   
}
jurosComp(9, 2200)
