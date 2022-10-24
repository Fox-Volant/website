import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the pageCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their pagecss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

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

                            <p>{page.date}</p>

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

                        <hr />
                    </article>

                    {/* <nav className="wordpress-page-nav">
                        <ul
                            style={{
                                display: `flex`,
                                flexWrap: `wrap`,
                                justifyContent: `space-between`,
                                listStyle: `none`,
                                padding: 0,
                            }}
                        >
                            <li>
                                {previous && (
                                    <Link to={previous.uri} rel="prev">
                                        ← {parse(previous.title)}
                                    </Link>
                                )}
                            </li>

                            <li>
                                {next && (
                                    <Link to={next.uri} rel="next">
                                        {parse(next.title)} →
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav> */}
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
        $previousPageId: String
        $nextPageId: String
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
        previous: wpPage(id: { eq: $previousPageId }) {
            uri
            title
        }
        next: wpPage(id: { eq: $nextPageId }) {
            uri
            title
        }
    }
`;

