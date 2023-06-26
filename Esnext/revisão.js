// let e var

{
    let a = 2
    var b = 1
    console.log(a)
}
console.log(b)

// Template string

const produto = 'Samsung'
console.log(`${produto} é uma marca!`)

// Destructuring

const [l, e, ...tras] = "Rafael"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {nome, idade} = {nome: "ana", idade: 19}
console.log(nome, idade)