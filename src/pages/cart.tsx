import { NextPage } from "next"
import Header from "next/head"

const Cart: NextPage = () => {
    return (
        <>
            <Header>
                <title>Nossos Produtos</title>
                <meta name="description" content="Meu carrinho de compras" />
                <link rel="icon" href="/favicon.ico" />
            </Header>

            <h1>
                Carrinho
            </h1>
        </>
    )
}

export default Cart