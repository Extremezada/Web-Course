
function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const objt1 = new MeuObjeto
const objt2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia meu nome é ${this.nome}!`)
}
objt1.falar()

objt2.nome =  'Rafael'
objt2.falar()

const objt3 = {}
objt3.__proto__ = MeuObjeto.prototype
objt3.nome = 'Objt3'
objt3.falar()

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
