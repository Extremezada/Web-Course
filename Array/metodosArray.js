
const comidas = ['Arroz', 'Feijão', 'Lasanha', 'Pizaa']
console.log(comidas)

// Elimina o ultimo elemento do array
comidas.pop() 
console.log(comidas)

// Adiciona um elemento ao final do array
comidas.push('Salada')
console.log(comidas)

// Elimina o primeiro elemento do array
comidas.shift() 
console.log(comidas)

// Adiciona um elemento no começo do array
comidas.unshift('Strogonoff') 
console.log(comidas)

/* 
Pode ser usado para excluir ou adicionar elementos, o primeiro param é o idicie base, o segundo param é quantos itens serão excluidos
e caso queira adicionar algum elemento é só escrever após a virgula quais serão
*/

comidas.splice(1, 0, 'Arroz', 'Sopa')
console.log(comidas)

comidas.splice(2,2)
console.log(comidas)

// Cria outro array com base em outro a partir do parametro
const comdias2 = comidas.slice(1,3)
console.log(comidas, '\n',comdias2)

/*
comidas.concat()

comidas.map()

comidas.reduce()

comidas.filter()

comidas.forEach()
*/