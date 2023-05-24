/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function pedido(n1, n2){
    switch(n1){
        case 100:
            n1 = 3.00
            break;
        case 200:
            n1 = 4.00
            break;
        case 300:
            n1 = 5.50
            break;
        case 400:
            n1 = 7.50
            break;
        case 500:
            n1 = 3.50
            break;
        case 600:
            n1 = 2.80
            break;
        default:
            console.log("Codigo do roduto não existente.")
    }
    return console.log(n1*n2)
}

pedido(200, 4)