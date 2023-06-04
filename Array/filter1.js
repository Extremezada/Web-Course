
const produtos = [ 
    { nome: 'Celular', preco: 4599, fragil: true},
    { nome: 'Notebook', preco: 7299, fragil: true},
    { nome: 'Camera', preco: 1799, fragil: true},
    { nome: 'Caixa de isopor', preco: 28.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2000 && p.fragil === true
}))
