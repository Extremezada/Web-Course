const express = require('express')
const saudacao = require('./saudacao')
const app = express()

app.use(saudacao('Rafael'))

app.get('/clientes/relatorio', (req, res)=>{
    res.send(`Cliente relatorio completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res)=>{
    res.send(`Cliente ${req.params.id} Selecionado`)
})

app.use('/opa', (req, res, next) =>{
    console.log('Testando 1')
    next()
})

app.get('/opa', (req, res, next) => {
    console.log('Testando 2')
    res.json({
        data: [
            {name: 'Pedro', idade: 15, peso: 68},
            {name: 'Ana', idade: 17, peso: 62},
            {name: 'Felipe', idade: 14, peso: 53}
        ],
        skik: 0, 
        limit: 3,
        count: 30
    })
    // res.json({
    //     name:'Salame Colonial',
    //     price: 14.99,
    //     discount: 0.2
    // })
    // res.send('Estou online')
    next()
})

app.use('/opa', (req, res, next) =>{
    console.log('Testando 3')
    next()
})

app.listen(3000, ()=>{
    console.log("Backend Executando!!")
})