// Clousure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acesssar e manipular variáveis externas à função

// Contexto léxico:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunction = fora()
console.log(minhaFunction())