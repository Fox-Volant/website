import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"
import { Hero } from "../components/StackedBridgeTest/StackedBridgeTest"


const DemoPage = () => {
  return (
    <div id="frontWrapper" className="d-flex flex-column">
        <header>
            <Container>
                <Row>
                    <Col className="mt-5 mb-5"><StaticImage src="../images/Asset 2xxxhdpi.png" alt="Fox Volant - UAV Solutions" /></Col>
                </Row>
            </Container>
        </header>
        <main>
            <Container>
                <Row>
                    <Col md={{span:8, offset:4}}>
                    {/* <StaticImage src="../images/1.png" alt="Fox Volant - UAV Solutions" /> */}
                        <Hero/>
                    </Col>
                </Row>
            </Container>
        </main>
        <footer className="text-end text-white-50 align-items-baseline mt-auto mb-3">
            <Container>
                <Row>
                    <Col>
                        <small>Copyright Fox Volant &copy; 2022</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default DemoPage