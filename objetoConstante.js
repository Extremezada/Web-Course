
const pessoa = { nome: "João" }
pessoa.nome = 'Pedro'
console.log(pessoa)

//Transforma o objeto todo em uma constante, não podendo alterar.
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)