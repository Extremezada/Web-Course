import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Andre" sobrenome="Souza">
            <Filho nome="Pedro" sobrenome="Souza"/>
            <Filho nome="Marta" sobrenome="Souza"/>
            <Filho nome="Luiz" sobrenome="Souza"/>
        </Pai>
    </div>
,document.getElementById('root'))