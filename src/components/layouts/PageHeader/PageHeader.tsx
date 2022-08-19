import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageHeader = (children, ...props) => {
    return (
        <header>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </header>
    )
}

export default PageHeader
