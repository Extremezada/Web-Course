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

    function clienteSelecionado(cliente: Cliente){
        console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
    
    return (
        <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
            <Layout titulo="Cadastro Simples">
                <Tabela 
                    clientes={clientes} 
                    clienteExcluido={clienteExcluido}
                    clienteSelecionado={clienteSelecionado} 
                />
            </Layout>
        </div>
    )
}
