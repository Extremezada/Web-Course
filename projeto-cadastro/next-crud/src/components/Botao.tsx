interface BotaoProps{
    className?: string
    children: any
    onClick?: () => void
}


export default function Botao(props: BotaoProps){
    
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-purple-500 to-blue-500
            text-white rounded-md py-2 px-4
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}