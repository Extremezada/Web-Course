
const alunos = [
    { nome: 'Pedro', nota: 7.2, bolsista: true},
    { nome: 'Antonio', nota: 7.7, bolsista: true},
    { nome: 'Rafael', nota: 8.4, bolsista: true},
    { nome: 'Felipe', nota: 5.8, bolsista: false}
]

// Implementando reduce para saber se todos são bolsistas

const todosBolsistas = (resutado, bolsista) => resutado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Agora para saber se algum aluno é bolsista

const algumBolsista = (resutado, bolsista) => resutado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


