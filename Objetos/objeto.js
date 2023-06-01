const brinquedo = new Object
brinquedo.nome = "Max Steel"
brinquedo.preco = 120.20
brinquedo["Marca do brinquedo"] = "Hasbro"

console.log(brinquedo)

const carro = {
    modelo: "A4",
    valor: 57000,
    proprietario:{
        nome: "Rafael",
        idade: 24,
        endereco:{
            rua: "Blumenau",
            bairro: "Dos municípios",
            numero: 565
        }
    },
    condutores:[{
        nome: "Pedro",
        idade: 26
    }, {
       nome: "Felipe",
       idade: 23 
    }],
    cacularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 523
carro.proprietario.endereco.rua = "Av.Brasil"

console.log(carro)