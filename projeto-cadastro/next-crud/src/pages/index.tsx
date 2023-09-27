import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

    const clientes = [
        new Cliente('Ana', 23, '1'),
        new Cliente('Pedro', 19, '2'),
        new Cliente('Maria', 39, '3'),
        new Cliente('Felipe', 47, '4'),
    ]

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('form')
    }
    function clienteExcluido(cliente: Cliente) {
        console.log(`Excluindo...${cliente.nome}`)
    }
    function salvarCliente(cliente: Cliente) {
        setVisivel('tabela')
        console.log(cliente)
    }
    
    function novoCliente() {
        setCliente(Cliente.vazio())
        setVisivel('form')
    }

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    return (
        <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
            <Layout titulo="Cadastro Simples">
                {visivel === 'tabela' ? (
                    <>
                        <div className="flex justify-end">
                            <Botao onClick={novoCliente} className="mb-4">Novo Cliente</Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteExcluido={clienteExcluido}
                            clienteSelecionado={clienteSelecionado}
                        />
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={() => setVisivel('tabela')}
                    />
                )}
            </Layout>
        </div>
    )
}
