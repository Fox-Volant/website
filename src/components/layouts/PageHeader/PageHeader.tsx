import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";

const PageHeader = (props) => {
    return (
        <header>
            <Container fluid className="bg-dark mb-5">
                <Row>
                    {props.children || (
                    <Col>
                        <div className="navbar-brand">
                            <StaticImage
                                src="../../../images/Asset 2xxxhdpi.png"
                                alt="Fox Volant - UAV Solutions"
                                loading="eager"
                                placeholder="tracedSVG"
                                height={100}
                            />
                        </div>
                    </Col>
                )}
                </Row>
            </Container>
        </header>
    );
};

export default PageHeader;
