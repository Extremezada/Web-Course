import Navegador from "../components/Navegador"

export default function Incicio(){
    
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <Navegador cor="crimson" nomePg="Estiloso" destino="/estiloso" />
            <Navegador cor="purple" nomePg="Exemplo" destino="/exemplo" />
            <Navegador nomePg="JSX" destino="/jsx" />
            <Navegador nomePg="Navegação #01" destino="/navegacao" 
            cor="green"/>
            <Navegador nomePg="Navegação #02" destino="/client/sp-22/123" cor="red" />
        </div>
    )
}