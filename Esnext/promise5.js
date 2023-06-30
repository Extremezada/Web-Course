
function fucionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }
            else{
                resolve(valor)
            }
        }
        catch{
            reject(e)
        }
    })
}

fucionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then( 
        v => colsol.log(v),
        err => console.log(`Erro Esp.:${err}`)
    )
    .then(()=> console.log("Quase Fim!"))
    .catch(err => console.log(`Erro: ${err}`))
    .then(()=> console.log("Fim!"))