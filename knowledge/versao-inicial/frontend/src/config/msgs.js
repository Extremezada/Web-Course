import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 2000
})

Vue.toasted.register(
    'defaultSuccess',
    'Operação realizada com sucesso!',
    {type: 'success', icon:'check'}
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Ops... Erro inesperado.' : payload.msg,
    {type: 'error', icon: 'times'}
)