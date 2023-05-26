/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

let string1 = "Albert"
let string2 = "Osco"

function iguais(s1,s2){
    let s1Pequena = s1.toLowerCase()
    let s2Pequena = s2.toLowerCase()
    if(s1Pequena === s2Pequena){
        return true
    }
    else{
        return false
    }
}

console.log(iguais(string1, string2))

