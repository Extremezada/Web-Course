
function estaEntre(numero, minimo, maximo, inclusivo){
    if(inclusivo == true){
        if(numero >= minimo && numero <= maximo){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
    else{
        if(numero > minimo && numero < maximo){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
}   

estaEntre(16, 100, 160, true)