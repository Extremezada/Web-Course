
function inverso(valor){

    const tipo = typeof valor
    
    switch(tipo){
        case tipo == "boolean":
            return !valor
            break
        case tipo == "number":
            return valor * -1
            break
        default:
            return 'Valor booleano ou numérico esperado, o parâmetro passado é do tipo "String"'
            break
    }
}

console.log(inverso('Sim'))