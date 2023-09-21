export default function Jsx() {

    const titulo = <h1>JSX é um conceito Central</h1>

    function Subtitulo(p) {
        return <h2>Para utilizar códigos JS em arquivos JSX utilizamos {p}</h2>
    }

    return (
        <div>
            {titulo}
            {Subtitulo('"{}"')}
        </div>
    )
}