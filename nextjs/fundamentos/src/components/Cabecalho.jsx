export default function Cabecalho(props){
    return(
        <header>
            <h1>
                {props.titulo ?? "Mais um exemplo"}
            </h1>
        </header>
    )
}