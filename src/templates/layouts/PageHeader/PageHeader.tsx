import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import NavMenu from "../../../components/NavMenu/NavMenu";

const PageHeader = (props) => {
    return (
        <header className="sticky-top">
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    {props.children || (
                        <>
                            <Navbar.Brand href="/">
                                <StaticImage
                                    src="../../../images/header-logo.png"
                                    alt="Fox Volant - UAV Solutions"
                                    loading="eager"
                                    placeholder="blurred"
                                    height={100}
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="header-navbar-nav" />
                            <Navbar.Collapse id="header-navbar-nav">
                                <NavMenu />
                            </Navbar.Collapse>
                        </>
                    )}
                </Container>
            </Navbar>
        </header>
    );
};

export default PageHeader;
