 
 function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
 }

 const aula1 = new Aula('Bem Vindo', 234)
 const aula2 = new Aula('Até mais', 227)
 console.log(aula1,aula2)

 // Como funciona o "new" por baixo dos panos

 function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 234)
const aula4 = novo(Aula, 'Até mais', 227)

console.log(aula3, aula4)
