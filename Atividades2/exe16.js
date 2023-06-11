
teste = [10, 70, 22, 43]

function soPares(array){
    const newArray = []
    for(let num in array){
        if(array[num]%2 == 0 && num%2 == 0){
            newArray.push(array[num])
        }
    }
    return console.log(newArray)
}

soPares(teste)