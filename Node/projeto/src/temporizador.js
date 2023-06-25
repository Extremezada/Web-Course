
const shcedule = require('node-schedule')

const tarefa1 = shcedule.scheduleJob('*/5 * 13 * * 7', function (){
    console.log("Executando Tarefa 1!", new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log("Cancelando Tarefa 1!")
}, 20000)

const regra = new shcedule.RecurrenceRule()
regra.dayOfWeek = [new shcedule.Range(1, 7)]
regra.hour = 13
regra.second = 30

const tarefa2 = shcedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})