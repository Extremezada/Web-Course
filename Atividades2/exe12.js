
teste = ["sim", 2, 3, 4, "xesque", 5, true]

function firstLast(array){
    newArray = []
    for(i = 0; i < array.length; i++){
        switch(i){
            case 0:
                newArray.push(array[i])
                break
            case array.length-1:
                newArray.push(array[i])
                break
        }
    }
    return console.log(newArray)
}

firstLast(teste)

