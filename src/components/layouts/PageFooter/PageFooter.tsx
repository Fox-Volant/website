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
                            <small className="text-end align-items-baseline mt-2 mb-3 d-block">
                                Copyright Fox Volant &copy; 2022
                            </small>
                        </Col>
                    )}
                </Row>
            </Container>
        </footer>
    );
};

export default PageFooter;
