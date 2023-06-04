
const alunos = [
    { nome: 'Pedro', nota: 7.2, bolsista: true},
    { nome: 'Antonio', nota: 7.7, bolsista: true},
    { nome: 'Rafael', nota: 8.4, bolsista: true},
    { nome: 'Felipe', nota: 5.8, bolsista: false}
]

const resutado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    return acumulador + atual
})

console.log(resutado)