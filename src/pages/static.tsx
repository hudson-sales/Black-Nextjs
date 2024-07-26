import { NextPage, GetStaticProps } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface ApiResponse {
    name:string 
    timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

    return {
            props: {
                staticData
            }
    }
}

const Static: NextPage = (props: {
     children?: ReactNode
     staticData?: ApiResponse
    }) => {
    
        const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("/api/hello").then(res => res.json())
        setClientSideData(data)
    }
    

    return (
        <Container>
            <h1 className="my-5">Como funcionam as renderizaçãoes do Next.js</h1>

            <Row>
                <Col>
                    <h3>Gerado estaticamente durante o biuld:</h3>
                    <p>{props.staticData?.timestamp.toString()}</p>
                </Col>
                <Col>
                    <h3>Gerado no cliente:</h3>
                    <p>{clientSideData?.timestamp.toString()}</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Static;