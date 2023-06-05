let x = 0
function fatorial(n){
    for( i=n; i < 1; i--){
        x = i*n
    }
    return x
}

console.log(fatorial(5))