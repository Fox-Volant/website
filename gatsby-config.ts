import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
const description =
    "Fox Volant are a team of UAV (Unmanned Aerial Vehicles, i.e; Drones) and photogrammetry specialists, based in East Anglia in the UK. We can capture and composite extensive, accurate photographic imagery and render it in any of a number of formats. We specialise in 2D photo-mosaics and 3D 'digital twins'. These are useful in a variety of industries eg. agriculture, archeology, or construction. Please contact us to find out how we can help you.";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Fox Volant | UAV Solutions`,
        description: `${description}`,
        twitterUsername: `@foxvolant_uav`,
        image: `flying-drone-quadcopter-picjumbo-com.jpg`,
        siteUrl: process.env.GATSBY_SITE_URL,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                sassOptions: {
                    precision: 6,
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
                name: `Fox Volant | UAV Solutions`,
                short_name: `Fox Volant`,
                start_url: `/`,
                background_color: `#E6E8E6`,
                theme_color: `#B53B03`,
                display: `standalone`,
                lang: `en`,
                description: `${description}`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                    backgroundColor: `transparent`,
                },
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://wordpress.foxvolant.com/graphql",
                verbose: true,
                // debug: {
                //     preview: true,
                //     throwRefetchErrors: true,
                //     graphql: {
                //         showQueryVarsOnError: true,
                //         showQueryOnError: true,
                //         writeQueriesToDisk: true,
                //     },
                // },
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-GHCKSPGD7G", // Google Analytics / GA
                    "GT-M34B6TJ",
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    //exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
    ],
};

export default config;
