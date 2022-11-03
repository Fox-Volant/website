import * as React from "react";
import PageBody from "../PageBody/PageBody";
import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";

const Layout = ({ headerContent, bodyContent, footerContent, fluid }) => {
    return (
        <>
            <PageHeader>{headerContent}</PageHeader>
            <PageBody fluid={fluid}>{bodyContent}</PageBody>
            <PageFooter>{footerContent}</PageFooter>
        </>
    );
};

export default Layout;
