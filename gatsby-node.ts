const path = require(`path`);
const chunk = require(`lodash/chunk`);

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
    const pages = await getpages(gatsbyUtilities);

    // If there are no posts in WordPress, don't do anything
    if (!pages.length) {
        return;
    }

    // If there are posts, create pages for them
    await createIndividualBlogPages({ pages, gatsbyUtilities });

    // And a paginated archive
    // await createBlogPagesArchive({ pages, gatsbyUtilities })
};

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPages = async ({ pages, gatsbyUtilities }) =>
    Promise.all(
        pages.map(({ previous, page, next }) =>
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the WordPress uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍
                path: page.uri,

                // use the blog post template as the page component
                component: path.resolve(`./src/components/WP_Page/WP_Page.tsx`),

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    // we need to add the post id here
                    // so our blog post template knows which blog post
                    // the current page is (when you open it in a browser)
                    id: page.id,

                    // We also use the next and previous id's to query them and add links!
                    previouspageId: previous ? previous.id : null,
                    nextpageId: next ? next.id : null,
                },
            })
        )
    );

/**
 * This function creates all the individual blog pages in this site
 */
// async function createBlogPagesArchive({ pages, gatsbyUtilities }) {
//   const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
//     {
//       wp {
//         readingSettings {
//           pagesPerPage
//         }
//       }
//     }
//   `)

//   const { pagesPerPage } = graphqlResult.data.wp.readingSettings

//   const pagesChunkedIntoArchivePages = chunk(pages, pagesPerPage)
//   const totalPages = pagesChunkedIntoArchivePages.length

//   return Promise.all(
//     pagesChunkedIntoArchivePages.map(async (_pages, index) => {
//       const pageNumber = index + 1

//       const getPagePath = page => {
//         if (page > 0 && page <= totalPages) {
//           // Since our homepage is our blog page
//           // we want the first page to be "/" and any additional pages
//           // to be numbered.
//           // "/blog/2" for example
//           return page === 1 ? `/` : `/blog/${page}`
//         }

//         return null
//       }

//       // createPage is an action passed to createPages
//       // See https://www.gatsbyjs.com/docs/actions#createPage for more info
//       await gatsbyUtilities.actions.createPage({
//         path: getPagePath(pageNumber),

//         // use the blog post archive template as the page component
//         component: path.resolve(`./src/templates/blog-page-archive.js`),

//         // `context` is available in the template as a prop and
//         // as a variable in GraphQL.
//         context: {
//           // the index of our loop is the offset of which posts we want to display
//           // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
//           // etc
//           offset: index * pagesPerPage,

//           // We need to tell the template how many posts to display too
//           pagesPerPage,

//           nextPagePath: getPagePath(pageNumber + 1),
//           previousPagePath: getPagePath(pageNumber - 1),
//         },
//       })
//     })
//   )
// }

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the pages 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getpages({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
        query Wppages {
            # Query all WordPress blog pages sorted by date
            allWpPage(sort: { fields: [date], order: DESC }) {
                edges {
                    previous {
                        id
                    }

                    # note: this is a GraphQL alias. It renames "node" to "page" for this query
                    # We're doing this because this "node" is a page! It makes our code more readable further down the line.
                    page: node {
                        id
                        uri
                    }

                    next {
                        id
                    }
                }
            }
        }
    `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your pages`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allWpPage.edges;
}