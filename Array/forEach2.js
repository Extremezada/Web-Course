
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const carros = ['Vectra', 'Eco Sport', 'Fiesta']

carros.forEach(function(nome){
    console.log(nome)
})

carros.forEach2(function(nome){
    console.log(nome)
})