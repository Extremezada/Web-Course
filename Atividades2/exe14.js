
teste = ["a", "b", 5, 2, 3, 5, "teste", 23]

function soNumeros(array){
    newArray = []
    for(let num in array){
        if(typeof(array[num]) == "number"){
            newArray.push(array[num])
        }
    }
    return newArray
}

console.log(soNumeros(teste))