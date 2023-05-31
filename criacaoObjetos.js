// literal

const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Lápiz", 1.99, 0.35)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Function factory

function CrarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CrarFuncionario("Joao", 11200, 3)
const f2 = CrarFuncionario("Maria", 7200, 1)

console.log(f1.getSalario(), f2.getSalario())

