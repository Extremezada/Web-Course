
let newArray = [1, 7, 10]

function media(array){
    let cont = 0 
    let total = 0

    for(let i in array){
        total += array[i]
        cont++
    }
    return console.log(total/cont)
}

media(newArray)