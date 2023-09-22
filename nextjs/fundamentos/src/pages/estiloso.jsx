import Link from 'next/link'
import style from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={style.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}