
// Operador ... rest(juntar)/Spread(espalhar)
// Usar rest com parêmetros de função

//Usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12222.22
}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//Spread com array

const grupoA = ['João', 'Maria', 'José']
const grupoB = ['Rafael', 'Ricardo', ...grupoA]
console.log(grupoB)