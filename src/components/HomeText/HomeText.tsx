import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextFrame from "../TextFrame/TextFrame";

const HomeText = (props) => {
    return (
        <Row className="mb-2 mb-md-3 mb-xl-5">
            <Col>
                <TextFrame>
                    <Row>
                        <Col className="d-none d-md-flex align-items-stretch">
                            {props.image}
                        </Col>
                        <Col
                            className={`p-3 pe-sm-5 ps-sm-5 ${
                                props.first ? "pe-md-3" : "ps-md-3"
                            }`}
                            md={{
                                span: 8,
                                order: props.first ? "first" : undefined,
                            }}
                            xl={{ span: 9 }}
                        >
                            {props.children}
                        </Col>
                    </Row>
                </TextFrame>
            </Col>
        </Row>
    );
};

export default HomeText;
