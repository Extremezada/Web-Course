const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const http = require('http')

http.createServer((req, res) => {
    req.write("Bom dia!")
    res.end()
}).listen(8000)