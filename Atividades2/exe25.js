
palavra = "Baralho"

function semVogais(string){
    let stringArray = string.split("")
    let letras = []
    
    for(let letra of stringArray){
        switch(letra){
            case "a" || "A":
                break
            case "e" || "E":
                break
            case "i" || "I":
                break
            case "o" || "O":
                break
            case "u" || "U":
                break
            default:
                letras.push(letra)
                break
        }
    }
    
    let result = letras.join('')
    return console.log(result)
}

semVogais(palavra)