import { graphql, useStaticQuery } from "gatsby";

export const useMenuData = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(locations: { in: GATSBY_HEADER_MENU }) {
                name
                id
                menuItems {
                    nodes {
                        order
                        path
                        label
                    }
                }
            }
        }
    `);
    return data.wpMenu.menuItems.nodes;
};
