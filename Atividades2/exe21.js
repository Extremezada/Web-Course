
function sorteio(num){
    numAleatorio = Math.floor(Math.random()* 10) + 1
    if(num == numAleatorio){
        console.log("Parabéns! O número sorteado foi " + numAleatorio)
    }
    else{
        console.log("Que pena! O número sorteado foi " + numAleatorio)
    }
}

sorteio(4)