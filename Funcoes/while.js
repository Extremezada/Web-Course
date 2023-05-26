function pegarNumeroAlaeatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = pegarNumeroAlaeatorioEntre(-1, 10)
    console.log(`Seu número foi ${opcao}.`)
}

console.log("Fim!!")