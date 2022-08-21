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
            <nav className="navbar bg-light mb-5">
                <div className="container-fluid">
                    <span className="navbar-brand"><StaticImage
                                src="../images/Asset 2xxxhdpi.png"
                                alt="Fox Volant - UAV Solutions"
                                loading="eager"
                                placeholder="tracedSVG"
                                height={100}
                            /></span>
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
                    <Row className="mb-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col>
                                        <StaticImage
                                            className="mb-xs-2 mb-md-0 me-md-2"
                                            src="../images/DJI_0034.jpg"
                                            alt=""
                                            height={300}
                                        />
                                    </Col>
                                    <Col className="p-3 pe-sm-5 ps-sm-5 ps-md-3" md={{ span: 9 }}>
                                        <h2>Who are Fox Volant?</h2>
                                        <p>
                                        Our first hands-on exposure with drones was back in 2018 and it's fair to say our eyes were opened to their potential from that point onwards. From the Ready To Fly (RTF) quadcopters such as whoops and toothpicks, building First Person View (FPV) racing and freestyle drones to the current generation of DJI camera drones, we've still on a journey.
Our background includes a mix of photography, software development, technical recruitment, IT security, transport solutions with a sprinkling of mathematics thrown in for good luck.

                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col>
                                        <StaticImage
                                            className="mb-xs-2 mb-md-0 mb-2 ms-md-2"
                                            src="../images/DJI_0293.jpg"
                                            alt=""
                                            height={300}
                                        />
                                    </Col>
                                    <Col className="p-3 pe-sm-5 ps-sm-5 pe-md-3" md={{ span: 9, order: "first" }}>
                                        <h2>Where are we?</h2>
                                        <p>
                                        We are based near Ely, Cambridgeshire, in that rich and wide open part of the country known as The Fens. An area renowned for its farming and agriculture and in more recent years for Silicon Fen - the rapid increase in tech companies based in and around Cambridge. Our involvement in a variety of different local tech businesses has kept us in this beautiful part of the country.

                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col>
                                        <StaticImage
                                            className="mb-xs-2 mb-md-0 me-md-2"
                                            src="../images/DJI_0382.jpg"
                                            alt=""
                                            height={300}
                                        />
                                    </Col>
                                    <Col className="p-3 pe-sm-5 ps-sm-5 ps-md-3" md={{ span: 9 }}>
                                        <h2>What do we do?</h2>
                                        <p>
                                        We firmly believe that drones and other Unmanned Aerial Vehicles (UAVs) are revolutionising many well-established industries, as well as helping create new ones as yet unenvisioned. Our main focus is <strong>photogrammetry</strong>, which as a concept has been around since the early days of photography, but really took off with the invention of the aeroplane by the Wright brothers.
                                        </p>
                                        <p>By capturing a large number of high-resolution aerial photographs from the air, these can then be stitched together to create a 2D orthomosaic or 3D model that has been geometrically corrected. These can provide an up-to-date and more detailed alternative to publicly available satellite imagery such as on Google or Bing maps.</p>
                                        <p>Whether you are viewing fields, woodland, sites of historical interest or a development site, these  capture an alternative view of your site. Geometric correction takes into account the curvature of the earth to provide more accurate measurements. Periodically rescanning an area will also provide you with a guide to how your site has changed over time, be it weeks, months or years.
</p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <TextFrame>
                                <Row>
                                    <Col>
                                        <StaticImage
                                            className="mb-xs-2 mb-md-0 mb-2 ms-md-2"
                                            src="../images/DJI_0469.jpg"
                                            alt=""
                                            height={300}
                                        />
                                    </Col>
                                    <Col className="p-3 pe-sm-5 ps-sm-5 pe-md-3" md={{ span: 9, order: "first" }}>
                                        <h2>Why do we do this?</h2>
                                        <p>
                                        As well as getting to use some ridiculously cool tech, there is a fundamental shift happening all around us which must be acknowledged. This hasn't been brought about by one thing, rather a mix of the global pandemic, changing working practices, climate change, energy crisis and the cost of living crisis.
                                        </p>
                                        <p>
                                        When asking ourselves What can we do?, we realised that by gathering and presenting data in an efficient manner we allow businesses and individuals to be more aware of their surroundings and the impact these shifts are having on the world around us. Having access to this data helps to make the right decisions for the future.
                                        </p>
                                    </Col>
                                </Row>
                            </TextFrame>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <TextFrame className="p-3 pe-sm-5 ps-sm-5">
                                <h2>How can we help you?</h2>
                                        <p>
                                        If you have a project you would like to discuss with us, or just want to say hi!, then fill in the following form and we'll get right back to you.</p>
                            </TextFrame>
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
    );
};

export default IndexPage;
