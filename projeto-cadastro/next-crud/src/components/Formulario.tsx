import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";
import { useState } from "react";

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?:  (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return(
        <div className="bg-purple-200 rounded-md p-6 ">
            {id ? ( 
                <Entrada 
                    somenteLeitura
                    texto="Código"
                    valor={id}/>
            ): false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao className="mr-2"
                    onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' :  'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}