
palavra = "Matemática e muito legal"

function quantasVesesNaFrase(string, letra){
    let palavraArray = string.split("")
    let cont = 0
    for(let i in palavraArray){
        if(letra === palavraArray[i]){
            cont++
        }
    }
    return console.log(cont)
}

quantasVesesNaFrase(palavra, "M")