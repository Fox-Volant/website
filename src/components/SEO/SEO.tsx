import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const SEO = ({ title, description, image, pathname, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        siteUrl,
        twitterUsername,
    } = useSiteMetadata();

    const seo = {
        title: title ? `Fox Volant | ${title}` : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}` + (image || defaultImage),
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:site" content={seo.twitterUsername} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta name="og:title" content={seo.title} />
            <meta name="og:url" content={seo.url} />
            <meta name="og:site_name" content="Fox Volant" />
            <meta name="og:description" content={seo.description} />
            <meta name="og:image" content={seo.image} />
            {children}
        </>
    );
};

export default SEO;
