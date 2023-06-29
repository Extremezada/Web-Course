
let p = new Promise(function(resolve){
    resolve(['Ana', 'Pedro', 'Felipe', 'Rafael'])
})

const letraMinuscula = valor => valor.toLowerCase()
const primeiraLetra = string => string[0]
const primeiroIndice = array => array[0]

p.then(primeiroIndice)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)