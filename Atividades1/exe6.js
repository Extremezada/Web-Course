function simples(n1,n2,n3){
    total = (n1*n2)*n3
    console.log((total).toFixed(2))
}

function compsto(n1,n2,n3){
    total = n1*(1 + n2)**n3
    console.log((total).toFixed(2))
}

compsto(1400, 0.07, 2)

simples(1400, 0.07, 2)