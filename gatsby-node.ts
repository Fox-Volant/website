const path = require(`path`);
// const chunk = require(`lodash/chunk`);

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async (gatsbyUtilities) => {
    // Query our posts from the GraphQL server
    const pages = await getPages(gatsbyUtilities);

    // If there are no pages in WordPress, don't do anything
    if (!pages.length) {
        return;
    }

    await createWordpressPages({ pages, gatsbyUtilities });
};

/**
 * This function creates all the individual blog pages in this site
 */
const createWordpressPages = async ({ pages, gatsbyUtilities }) => {
    const homePageTemplate = path.resolve(
        `./src/templates/WP_Page/home-page.tsx`,
    );
    const wpPageTemplate = path.resolve(`./src/templates/WP_Page/WP_Page.tsx`);
    Promise.all(
        pages.map((page) =>
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the WordPress uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍
                path: page.uri,

                // use the blog post template as the page component
                component: page.isFrontPage ? homePageTemplate : wpPageTemplate,

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    // we need to add the post id here
                    // so our blog post template knows which blog post
                    // the current page is (when you open it in a browser)
                    id: page.id,
                },
            }),
        ),
    );
};

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the pages 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPages({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
        query allPages {
            WPPages: allWpPage(sort: { menuOrder: ASC }) {
                nodes {
                    uri
                    id
                    isFrontPage
                    menuOrder
                }
            }
        }
    `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your pages`,
            graphqlResult.errors,
        );
        return;
    }

    return graphqlResult.data.WPPages.nodes;
}
