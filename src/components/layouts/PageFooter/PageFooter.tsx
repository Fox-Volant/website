import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageFooter = (props) => {
    return (
        <footer className={props.className || "bg-dark text-white-50"}>
            <Container>
                <Row>
                    {props.children || (
                        <Col>
                            <small className="text-end align-items-baseline mt-2 d-block">
                                &copy; Fox Volant 2022
                            </small>
                            <small className="text-end align-items-baseline mt-2 mb-3 d-block">
                                Little Foxes Consulting Ltd trading as Fox
                                Volant
                            </small>
                        </Col>
                    )}
                </Row>
            </Container>
        </footer>
    );
};

export default PageFooter;
