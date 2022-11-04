import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Layout from "../layouts/Layout/Layout";
import SEO from "../../components/SEO/SEO";

const Index = ({ data }) => {
    const pages = data.WPPages.nodes;
    const homePage = data.homePage;
    const pageCount = pages.length;
    const oddPageCount = !!(pageCount % 2);
    const featuredImage = {
        data: homePage.featuredImage?.node?.localFile?.childImageSharp
            ?.gatsbyImageData,
        alt: homePage.featuredImage?.node?.alt || ``,
    };

    return (
        <Layout
            fluid={true}
            bodyContent={
                <>
                    <article
                        className="wordpress-page"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                            {/* if we have a featured image for this page let's display it */}
                            {featuredImage?.data && (
                                <GatsbyImage
                                    image={featuredImage.data}
                                    alt={featuredImage.alt}
                                    style={{
                                        marginBottom: 50,
                                        marginTop: -50,
                                        maxHeight: `350px`,
                                    }}
                                    className="row"
                                />
                            )}
                            <Row>
                                <Col lg={{ offset: 1, span: 10 }}>
                                    <h1 itemProp="headline">
                                        {parse(homePage.title)}
                                    </h1>
                                </Col>
                            </Row>
                        </header>

                        {!!homePage.content && (
                            <Col lg={{ offset: 1, span: 10 }}>
                                <section itemProp="articleBody">
                                    {parse(homePage.content)}
                                </section>
                            </Col>
                        )}
                    </article>
                    <Row>
                        <Col lg={{ offset: 1, span: 10 }}>
                            <Row className="mb-4" xs={1} sm={2} md={3}>
                                {pages
                                    .sort((a, b) => a.menuOrder - b.menuOrder)
                                    .map((page) => {
                                        const title = page.title;
                                        const description =
                                            page.pageMetaData.description;
                                        const featuredImage = {
                                            data: page.featuredImage?.node
                                                ?.localFile?.childImageSharp
                                                ?.gatsbyImageData,
                                            alt:
                                                page.featuredImage?.node?.alt ||
                                                ``,
                                        };
                                        const fullWidthOrphan =
                                            page.menuOrder == pageCount &&
                                            oddPageCount &&
                                            "auto";

                                        return (
                                            <Col
                                                className="mb-2"
                                                sm={fullWidthOrphan}
                                            >
                                                <Card
                                                    key={page.uri}
                                                    style={{ height: "100%" }}
                                                >
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
                                                            {parse(description)}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Card.Link
                                                            href={page.uri}
                                                        >
                                                            {`Read more about our
                                                ${parse(
                                                    title.replace(/s$/, "")
                                                )}
                                                service.`}
                                                        </Card.Link>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </Col>
                    </Row>
                </>
            }
        ></Layout>
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
                                    placeholder: TRACED_SVG
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
                                placeholder: TRACED_SVG
                                layout: FULL_WIDTH
                            )
                        }
                    }
                }
            }
        }
    }
`;

export const Head = () => <SEO />;
