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
                            <small className="text-center align-items-baseline mt-2 d-block">
                                &copy; Fox Volant&reg; 2022 – Fox Volant&reg; is
                                the trading name of Little Foxes Consulting Ltd
                            </small>
                            <small className="text-center align-items-baseline mt-2 mb-3 d-block">
                                Little Foxes Consulting Ltd is a company
                                registered in England and Wales (Company no.
                                13578784) – 1 School Lane, Aldreth, Ely, CB6 3PL
                                – VAT no. 389974311
                            </small>
                        </Col>
                    )}
                </Row>
            </Container>
        </footer>
    );
};

export default PageFooter;
