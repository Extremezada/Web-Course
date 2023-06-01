const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj1, obj2)

const valorAtr = 7.99
const nomeAtr = 'nota'

const obj3 = {
    [nomeAtr]: valorAtr
}

console.log(obj3)

const obj4 = {
    f1: function(){

    },
    f2(){

    }
}

console.log(obj4)