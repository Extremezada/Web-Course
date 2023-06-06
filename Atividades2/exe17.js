
const itens = [
    { nome: "Galaxy S20", categoria: "Eletrônico", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônico", preco: 30999.90}
]

function despesas(obj){
    var total = 0
    for(let i of obj){
        total += i.preco
    }
    return console.log(total)
}

despesas(itens)