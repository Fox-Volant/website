import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Layout from "../layouts/Layout/Layout";
import SEO from "../../components/SEO/SEO";
import ContactForm from "../../components/ContactForm/ContactForm";
import "../../styles/wp_styles.scss";

const WordpressPageTemplate = ({ data: { page } }) => {
    const featuredImage = {
        data: page.featuredImage?.node?.localFile?.childImageSharp
            ?.gatsbyImageData,
        alt: page.featuredImage?.node?.alt || ``,
    };
    const template = page?.template?.templateName;

    return (
        <Layout
            bodyContent={
                <>
                    <article
                        className="wordpress-page"
                        itemScope
                        itemType="https://schema.org/Article">
                        <Container fluid className="">
                            <header className="page-header">
                                {/* if we have a featured image for this page let's display it */}
                                {featuredImage?.data && (
                                    <GatsbyImage
                                        image={featuredImage.data}
                                        alt={featuredImage.alt}
                                        // layout="fixed"
                                        style={{
                                            maxHeight: `250px`,
                                        }}
                                        className="row hero-image"
                                    />
                                )}
                                <Row>
                                    <Col lg={{ offset: 1, span: 10 }}>
                                        <h1
                                            className="page-title"
                                            itemProp="headline">
                                            {parse(page.title)}
                                        </h1>
                                    </Col>
                                </Row>
                            </header>
                        </Container>
                        <Container>
                            {(!!page.content ||
                                template == "Contact Page Template") && (
                                <Row>
                                    <Col className="wp-block-group">
                                        {!!page.content && (
                                            <section
                                                className="bg-white shadow p-3 px-xxl-7 px-xl-6 p-md-5 p-sm-4 clearfix"
                                                itemProp="articleBody">
                                                {parse(page.content)}
                                            </section>
                                        )}
                                        {template ==
                                            "Contact Page Template" && (
                                            <section className="bg-white shadow p-3 px-xxl-7 px-xl-6 pb-md-5 pb-sm-4 clearfix">
                                                <ContactForm />
                                            </section>
                                        )}
                                    </Col>
                                </Row>
                            )}
                        </Container>
                    </article>
                </>
            }></Layout>
    );
};

export default WordpressPageTemplate;
export const Head = () => <SEO />;

export const pageQuery = graphql`
    query WordpressPageById($id: String!) {
        page: wpPage(id: { eq: $id }) {
            id
            isFrontPage
            content
            title
            date(formatString: "MMMM DD, YYYY")
            template {
                templateName
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
`;
