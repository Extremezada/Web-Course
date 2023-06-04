
const nums = [1, 2, 3, 4, 5]
dobroNums = nums.map(function(elemento){
    return elemento * 2
})

console.log(nums, dobroNums)

const triplo = e => e * 3
const emReais = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`
const soma10 = e => e + 10

resultado = nums.map(triplo).map(soma10).map(emReais)
console.log(resultado)