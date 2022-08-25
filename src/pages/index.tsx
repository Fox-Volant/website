import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import { TextFrame } from "../components/TextFrame/TextFrame";

const IndexPage = () => {
    return (
        <div id="frontWrapper" className="d-flex flex-column">
            <header>
                <nav className="navbar bg-dark mb-5">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            <StaticImage
                                src="../images/Asset 2xxxhdpi.png"
                                alt="Fox Volant - UAV Solutions"
                                loading="eager"
                                placeholder="tracedSVG"
                                height={100}
                            />
                        </span>
                    </div>
                </nav>
                {/* <Container>
                    <Row>
                        <Col className="mt-5 mb-5">
                            <StaticImage
                                src="../images/Asset 2xxxhdpi.png"
                                alt="Fox Volant - UAV Solutions"
                                loading="eager"
                                placeholder="tracedSVG"
                            />
                        </Col>
                    </Row>
                </Container> */}
            </header>
            <main>
                <Container>
                    <Row className="mb-2 mb-md-3 mb-xl-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col className="d-none d-sm-flex align-items-stretch">
                                        <StaticImage
                                            className="me-md-2"
                                            src="../images/DJI_0795.jpg"
                                            alt=""
                                            height={300}
                                            objectPosition="0"
                                        />
                                    </Col>
                                    <Col
                                        className="p-3 pe-sm-5 ps-sm-5 ps-md-3"
                                        sm={{ span: 7 }} md={{ span: 8 }} xl={{ span: 9 }}
                                    >
                                        <h2>Who are Fox Volant?</h2>
                                        <p>
                                            Our first hands-on exposure with
                                            drones was back in 2018 and it's
                                            fair to say our eyes were opened to
                                            their potential from that point
                                            onwards. From the Ready To Fly (RTF)
                                            quadcopters such as whoops and
                                            toothpicks, building First Person
                                            View (FPV) racing and freestyle
                                            drones to the current generation of
                                            DJI camera drones, we're still on a
                                            journey. Our background includes a
                                            mix of photography, software
                                            development, technical recruitment,
                                            IT security, transport solutions
                                            with a sprinkling of mathematics
                                            thrown in for good luck.
                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-2 mb-md-3 mb-xl-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col className="d-none d-sm-flex align-items-stretch">
                                        <StaticImage
                                            className="ms-md-2"
                                            src="../images/DJI_0034.jpg"
                                            alt=""
                                            height={300}
                                            objectPosition="0"
                                        />
                                    </Col>
                                    <Col
                                        className="p-3 pe-sm-5 ps-md-5 pe-md-3"
                                        sm={{ span: 7, order: "first"  }} md={{ span: 8}} xl={{ span: 9 }}
                                    >
                                        <h2>What do we do?</h2>
                                        <p>
                                            We provide photogrammetry services
                                            throughout East Anglia for a variety
                                            of organisations. By capturing a
                                            large number of high-resolution
                                            photographs from the air we can
                                            create an orthomosaic or a digital
                                            twin that has been geometrically
                                            corrected. Whether you are viewing
                                            fields, woodland, sites of
                                            historical interest or a development
                                            site, these alternative views will
                                            provide you with an invaluable
                                            source of information.
                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-2 mb-md-3 mb-xl-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col className="d-none d-sm-flex align-items-stretch">
                                        <StaticImage
                                            className="me-md-2"
                                            src="../images/DJI_0793.jpg"
                                            alt=""
                                            height={300}
                                            objectPosition="0"
                                        />
                                    </Col>
                                    <Col
                                        className="p-3 pe-sm-5 ps-sm-5 ps-md-3"
                                        sm={{ span: 7 }} md={{ span: 8 }} xl={{ span: 9 }}
                                    >
                                        <h2>Where are we?</h2>
                                        <p>
                                            We are based near Ely,
                                            Cambridgeshire, in that rich and
                                            wide open part of the country known
                                            as The Fens. An area renowned for
                                            its farming and agriculture and in
                                            more recent years for Silicon Fen -
                                            the rapid increase in tech companies
                                            based in and around Cambridge. Our
                                            involvement in a variety of
                                            different local tech businesses has
                                            kept us in this beautiful part of
                                            the country.
                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-2 mb-md-3 mb-xl-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col className="d-none d-sm-flex align-items-stretch">
                                        <StaticImage
                                            className="ms-md-2"
                                            src="../images/DJI_0469.jpg"
                                            alt=""
                                            height={300}
                                            objectPosition="0"
                                        />
                                    </Col>
                                    <Col
                                        className="p-3 pe-sm-5 ps-sm-5 pe-md-3"
                                        sm={{ span: 7, order: "first"  }} md={{ span: 8}} xl={{ span: 9 }}
                                    >
                                        <h2>Why do we do this?</h2>
                                        <p>
                                            Aside from getting to use some of
                                            the latest and coolest tech, we
                                            believe that as we see the world
                                            changing around us, new technologies
                                            will help show us the way forward.
                                            These include using UAVs to monitor
                                            crop health, thereby minimising the
                                            use of potentially harmful
                                            pesticides and maximising the
                                            overall yield. Also the ability to
                                            create detailed digital twins of
                                            assets in remote locations, provides
                                            a simpler way to monitor them for
                                            resource management and reducing
                                            costly maintenance tasks.
                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-2 mb-md-3 mb-xl-5">
                        <Col>
                            <TextFrame className="p-3 pe-sm-5 ps-sm-5">
                                <h2>How can we help you?</h2>
                                <p>
                                    If you have a project you would like to
                                    discuss with us, or just want to say hi!,
                                    then fill in the following form and we'll
                                    get right back to you.
                                </p>
                            </TextFrame>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer className="text-white-50 bg-dark">
                <Container>
                    <Row>
                        <Col>
                            <small className="text-end align-items-baseline mt-2 mb-3 d-block">Copyright Fox Volant &copy; 2022</small>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default IndexPage;
