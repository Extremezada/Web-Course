
function salario(horasTrabalhadas, valorHora){
    return console.log("Salário igual a R$" + (horasTrabalhadas * valorHora).toFixed(2).replace('.',','))
}

salario(150, 40.5)