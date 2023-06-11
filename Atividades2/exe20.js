
newArray = [5, -15, 50, 3]

function menorNumero(array){
    menor = array[0]
    for(i in array){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return console.log(menor)
}

menorNumero(newArray)