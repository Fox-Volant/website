import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Layout from "../layouts/Layout/Layout";
import SEO from "../../components/SEO/SEO";
import ContactForm from "../../components/ContactForm/ContactForm";
import "../../styles/wp_styles.scss";

const WordpressPageTemplate = ({ data: { previous, next, page } }) => {
    const featuredImage = {
        data: page.featuredImage?.node?.localFile?.childImageSharp
            ?.gatsbyImageData,
        alt: page.featuredImage?.node?.alt || ``,
    };
    const template = page?.template?.templateName;

    return (
        <Layout
            fluid={true}
            bodyContent={
                <>
                    <article
                        className="wordpress-page"
                        itemScope
                        itemType="http://schema.org/Article">
                        <header class="page-header">
                            {/* if we have a featured image for this page let's display it */}
                            {featuredImage?.data && (
                                <GatsbyImage
                                    image={featuredImage.data}
                                    alt={featuredImage.alt}
                                    style={{
                                        marginBottom: 40,
                                        marginTop: -40,
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

                        {(!!page.content ||
                            template == "Contact Page Template") && (
                            <Col
                                lg={{ offset: 1, span: 10 }}
                                className="wp-block-group">
                                {!!page.content && (
                                    <section itemProp="articleBody">
                                        {parse(page.content)}
                                    </section>
                                )}
                                {template == "Contact Page Template" && (
                                    <section>
                                        <ContactForm />
                                    </section>
                                )}
                            </Col>
                        )}
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
