const { values } = require("lodash")

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout( () => resolve() , tempo)
    })
}

// esperarPor()
//     .then(()=> console.log("Executando promise 1..."))
//     .then(esperarPor)
//     .then(()=> console.log("Executando promise 2..."))
//     .then(esperarPor)
//     .then(()=> console.log("Executando promise 3..."))

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}
async function executar(){
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Asyn/Await 1 ${valor}...`)
    await esperarPor(1500)
    console.log(`Asyn/Await 2 ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Asyn/Await 3 ${valor + 2}...`)
    
    return valor+3
}

executar()
    .then(console.log)