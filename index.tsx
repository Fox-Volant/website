import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "./src/components/ContactForm/ContactForm";
import Layout from "./src/templates/layouts/Layout/Layout";
import HomeText from "./src/components/HomeText/HomeText";
import SEO from "./src/components/SEO/SEO";

const IndexPage = () => {
    return (
        <Layout
            bodyContent={
                <>
                    <HomeText
                        image={
                            <StaticImage
                                className="me-md-2"
                                src={"../images/DJI_0795.jpg"}
                                alt=""
                                objectPosition="0"
                            />
                        }
                    >
                        <h2>Who are Fox Volant?</h2>
                        <p>
                            The team behind Fox Volant have been building and
                            flying drones for pleasure since we first happened
                            upon them. We've come a long way since those first
                            tentative flights with whoops and toothpicks, moving
                            up to racing drones and the latest generation of
                            camera drones from the likes of DJI.
                        </p>
                        <p>
                            Between us we have many years of experience working
                            in a variety of IT sectors (social care, gaming and
                            transit to name a few), alongside our passion for
                            photography as both an art form and an instrument
                            for change.
                        </p>
                    </HomeText>
                    <HomeText
                        first
                        image={
                            <StaticImage
                                className="ms-md-2"
                                src={"../images/DJI_0034.jpg"}
                                alt=""
                                objectPosition="0"
                            />
                        }
                    >
                        <h2>What do we do?</h2>
                        <p>
                            We provide photogrammetry services throughout East
                            Anglia to a variety of organisations that can
                            benefit from them, such as agriculture, woodland
                            management, construction and asset management. First
                            capturing a large number of high-resolution
                            photographs from the air, we then process these to
                            create geometrically corrected 2D orthomosaics or 3D
                            digital twins.
                        </p>
                        <p>
                            These assets can then be accessed from our secure
                            website for viewing or to download for offline
                            analysis. Scanning the same site at regular
                            intervals provides a visual comparison of how they
                            are evolving.
                        </p>
                    </HomeText>
                    <HomeText
                        image={
                            <StaticImage
                                className="me-md-2"
                                src={"../images/DJI_0793.jpg"}
                                alt=""
                                objectPosition="0"
                            />
                        }
                    >
                        <h2>Where are we?</h2>
                        <p>
                            We are based near Ely, Cambridgeshire, in that rich
                            and wide open part of the country known as The Fens.
                            An area renowned for its farming and agriculture and
                            in more recent years for Silicon Fen - the rapid
                            increase in tech companies based in and around
                            Cambridge.
                        </p>
                        <p>
                            Having worked for a variety of local tech companies,
                            we are now proud to be offering our services to
                            other businesses and organisations around East
                            Anglia.
                        </p>
                    </HomeText>
                    <HomeText
                        first
                        image={
                            <StaticImage
                                className="ms-md-2"
                                src={"../images/DJI_0469.jpg"}
                                alt=""
                                objectPosition="0"
                            />
                        }
                    >
                        <h2>Why do we do this?</h2>
                        <p>
                            Aside from getting to use some of the latest and
                            coolest tech, we believe that as the world changes
                            around us, new technologies help show us the best
                            way forward. Some examples of these are monitoring
                            crop health to maximise yield and minimise use of
                            pesticides; aiding with the monitoring and
                            management of our woodland; and creating digital
                            twins of assets in otherwise inaccessible locations.
                            Use of UAVs and photogrammetry makes all of these
                            quicker and more cost-effective than the
                            alternatives.
                        </p>
                    </HomeText>
                    <HomeText
                        image={
                            <StaticImage
                                className="me-md-2"
                                src={"../images/DJI_0293.jpg"}
                                alt=""
                                objectPosition="0"
                            />
                        }
                    >
                        <h2>How can we help you?</h2>
                        <p>
                            If you have a project you would like to discuss with
                            us, or just want to say hi!, then fill in the form
                            and we'll get right back to you.
                        </p>
                        <ContactForm/>
                    </HomeText>
                </>
            }
        />
    );
};

export default IndexPage;

export const Head = () => (
    <SEO/>
);
