const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { userNewUrlParser: true})
    .catch(e => {
        const msg = "ERRO! Não foi possivel se conectar ao MongoDB!"
        console.log('\x1b[33m%s\x1b[0m', msg, '\x1b[0m')
    })