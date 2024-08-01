import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
    name:string 
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
    const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
    
    return {
        props: {
            serverSideData
        }
    }
}

const Dynamic: NextPage = (props: {
     children?: ReactNode
     serverSideData?: ApiResponse
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
                    <h3>Gerado no servidor:</h3>
                    <p>{props.serverSideData?.timestamp.toString()}</p>
                    
                </Col>
                <Col>
                    <h3>Gerado no cliente:</h3>
                    <p>{clientSideData?.timestamp.toString()}</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Dynamic;