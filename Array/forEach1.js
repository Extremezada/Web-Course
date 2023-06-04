
const cidades = ['Caçador','Salvador', 'Chapecó', 'Xaxim', 'Xanxere']
cidades.sort()

// Passa por cada elemento do array. Retorna 3 paramtetros, o 'nome' do elemento, o seu indice e o Array em questão

const mostrarCidades = cidade => console.log(cidade)
cidades.forEach(mostrarCidades)

cidades.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

