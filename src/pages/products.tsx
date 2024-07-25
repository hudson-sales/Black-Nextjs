import { NextPage } from "next"
import Header from "next/head"

const Products: NextPage = () => {
    return (
        <>
            <Header>
                <title>Nossos Produtos</title>
                <meta name="description" content="Conheça todos nossos produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Header>

            <h1>
                Nossos produtos
            </h1>
        </>
    )
}

export default Products