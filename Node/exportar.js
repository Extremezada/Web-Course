
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
// atribuir sempre ao module.exports para criar um novo obj

exports = null

console.log(module.exports)

module.exports = {
    publico: true
}

console.log(module.exports)

