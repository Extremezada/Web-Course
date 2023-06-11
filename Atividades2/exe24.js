
newArray = ["programação", "mobile", "profissional"]

function filtro(palavraFiltro, array){
    let contido = []

    for(let i of array){
        if(i.includes(palavraFiltro)){
            contido.push(i)
        }
    }
    return console.log(contido)
}

filtro("pro", newArray)