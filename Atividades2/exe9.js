
function multiplySemMultiply(num1, num2){
    let total = num2
    if(num1 === 0 || num2 === 0){
        return console.log("0")
    }
    else{
        for(let i = 1; i < num1; i++){
            total += num2
        }
        return console.log(total)
    }
}

multiplySemMultiply(5, 4)