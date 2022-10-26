import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../layouts/Layout/Layout";
import SEO from "../SEO/SEO";

const WordpressPageTemplate = ({ data: { previous, next, page } }) => {
    const featuredImage = {
        data: page.featuredImage?.node?.localFile?.childImageSharp
            ?.gatsbyImageData,
        alt: page.featuredImage?.node?.alt || ``,
    };

    return (
        <Layout
            bodyContent={
                <>
                    <article
                        className="wordpress-page"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                            <h1 itemProp="headline">{parse(page.title)}</h1>

                            {/* if we have a featured image for this page let's display it */}
                            {featuredImage?.data && (
                                <GatsbyImage
                                    image={featuredImage.data}
                                    alt={featuredImage.alt}
                                    style={{ marginBottom: 50 }}
                                />
                            )}
                        </header>

                        {!!page.content && (
                            <section itemProp="articleBody">
                                {parse(page.content)}
                            </section>
                        )}

                    </article>
                </>
            }
        ></Layout>
    );
};

export default WordpressPageTemplate;
export const Head = () => (
    <SEO/>
);

export const pageQuery = graphql`
    query WordpressPageById(
        $id: String!
    ) {
        page: wpPage(id: { eq: $id }) {
            id
            content
            title
            date(formatString: "MMMM DD, YYYY")
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

