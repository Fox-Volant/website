import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Layout from "../layouts/Layout/Layout";
import SEO from "../../components/SEO/SEO";
import TextFrame from "../../components/TextFrame/TextFrame";
import "../../styles/wp_styles.scss";

const Index = ({ data }) => {
    const pages = data.WPPages.nodes;
    const homePage = data.homePage;
    const pageCount = pages.length;
    const oddPageCount = !!(pageCount % 2);
    const featuredImage = {
        data: getImage(homePage.featuredImage?.node?.localFile),
        alt: homePage.featuredImage?.node?.alt || ``,
    };

    return (
        <Layout
            bodyContent={
                <>
                    {featuredImage?.data && (
                        <Container fluid>
                            <header>
                                {/* if we have a featured image for this page let's display it */}
                                <GatsbyImage
                                    image={featuredImage.data}
                                    alt={featuredImage.alt}
                                    style={{
                                        maxHeight: `350px`,
                                    }}
                                    className="row"
                                />
                            </header>
                        </Container>
                    )}
                    <Container>
                        <Row className="mt-4">
                            <Col>
                                <Row
                                    className="mb-4 site-links"
                                    xs={1}
                                    sm={2}
                                    md={3}>
                                    {pages
                                        .sort(
                                            (a, b) => a.menuOrder - b.menuOrder,
                                        )
                                        .map((page) => {
                                            const title = page.title;
                                            const description =
                                                page.pageMetaData
                                                    ?.description || "";
                                            const featuredImage = {
                                                data: getImage(
                                                    page.featuredImage?.node
                                                        ?.localFile,
                                                ),
                                                alt:
                                                    page.featuredImage?.node
                                                        ?.alt || ``,
                                            };
                                            // If there's an odd number of cards to display, make the last display full-width on tablet (small) screens
                                            const fullWidthOrphan =
                                                page.menuOrder == pageCount &&
                                                oddPageCount &&
                                                "auto";

                                            return (
                                                <Col
                                                    key={page.uri}
                                                    className="mb-2 link-card-container"
                                                    sm={fullWidthOrphan}>
                                                    <Card
                                                        style={{
                                                            height: "100%",
                                                        }}
                                                        className="shadow">
                                                        {featuredImage?.data && (
                                                            <GatsbyImage
                                                                image={
                                                                    featuredImage.data
                                                                }
                                                                alt={
                                                                    featuredImage.alt
                                                                }
                                                                imgClassName="card-img-top"
                                                            />
                                                        )}
                                                        <Card.Body>
                                                            <Card.Title>
                                                                {parse(title)}
                                                            </Card.Title>
                                                            <Card.Text>
                                                                {parse(
                                                                    description,
                                                                )}
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <Card.Link
                                                                href={page.uri}
                                                                className="stretched-link">
                                                                Read more
                                                                <span className="visually-hidden">
                                                                    {`about our ${parse(
                                                                        title.replace(
                                                                            /s$/,
                                                                            "",
                                                                        ),
                                                                    )} service`}
                                                                </span>
                                                            </Card.Link>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <article
                                className="wordpress-page"
                                itemScope
                                itemType="https://schema.org/Article">
                                {!!homePage.content && (
                                    <Col>
                                        <TextFrame className="p-2 mb-3">
                                            <section itemProp="articleBody">
                                                {parse(homePage.content)}
                                            </section>
                                        </TextFrame>
                                    </Col>
                                )}
                            </article>
                        </Row>
                    </Container>
                </>
            }></Layout>
    );
};

export default Index;

export const pageQuery = graphql`
    query WordPressPageList {
        WPPages: allWpPage(
            filter: { pageMetaData: { includeOnHomePage: { eq: true } } }
        ) {
            nodes {
                uri
                title
                content
                menuOrder
                pageMetaData {
                    description
                    includeOnHomePage
                }
                featuredImage {
                    node {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 100
                                    placeholder: BLURRED
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                    }
                }
            }
        }
        homePage: wpPage(isFrontPage: { eq: true }) {
            id
            title
            content
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 100
                                placeholder: BLURRED
                                layout: FULL_WIDTH
                            )
                        }
                    }
                }
            }
        }
    }
`;

export const Head = () => <SEO title="UAV Solutions" />;
