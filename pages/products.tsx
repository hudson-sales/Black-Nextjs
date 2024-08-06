import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Header from "@/components/Header"
import { Container } from "reactstrap"
import ProductsList from "@/components/ProductsList"
import { fetchProducts, ProductType } from "@/services/products"
import { ReactNode } from "react"

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetchProducts()

    return { props: { products } }
}

const Products: NextPage = (props: {
    children?: ReactNode
    products?: ProductType[]
}) => {
    return (
        <>
            <Head>
                <title>Nossos Produtos</title>
                <meta name="description" content="Conheça todos nossos produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <Container>
                <h1>
                    Nossos produtos
                </h1>
                {<ProductsList products={props.products!}/>}
                </Container>
            </main>
        </>
    )
}

export default Products