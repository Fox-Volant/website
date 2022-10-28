import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PageBody = (props) => {
    return (
        <main>
            <Container fluid={props.fluid}>
                {props.children}
            </Container>
        </main>
    )
}

export default PageBody