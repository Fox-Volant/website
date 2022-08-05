import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"
import { Welcome } from "../components/Welcome/Welcome"


const IndexPage = () => {
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
                    <Col md={{span:6, offset:3}}>
                        <Welcome>
                            <h1 className="h2 flex-fill">Welcome to Fox Volant</h1>
                            <p className="flex-grow-1">We're sorry, this site is currently under construction. We'll be taking off soon, but in the mean time, please check us out on social media:</p>
                            <a className="flex-grow-1 align-self-stretch align-content-center" href="https://www.instagram.com/foxvolant_uav/"><StaticImage src="../images/Instagram_Glyph_Gradient.png" placeholder="tracedSVG" height={80} width={80} objectPosition="50% 100%" alt="Follow Fox Volant on Instagram"/></a>
                        </Welcome>
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

export default IndexPage
