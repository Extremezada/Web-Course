
let array = []

function repete(valor, repeticoes){
    
    for(let i = 0; i < repeticoes; i++){
        array.push(valor)
    }
    return console.log(array)
}

repete("Dig dig dig ie", 5)