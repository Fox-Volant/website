import * as React from "react";
import Container from "react-bootstrap/Container";

const PageBody = (props) => {
    return (
        <main className="mb-5">
            <Container fluid={props.fluid}>{props.children}</Container>
        </main>
    );
};

export default PageBody;
