import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { useMenuData } from "../../hooks/use-menu-data";

const NavMenu = () => {
    const menuItems = useMenuData();
    return (
        <Nav className="ms-auto">
            {menuItems
                .sort((a, b) => a.order - b.order)
                .map((menuItem) => (
                    <Nav.Link href={menuItem.path}>{menuItem.label}</Nav.Link>
                ))}
        </Nav>
    );
};

export default NavMenu;
