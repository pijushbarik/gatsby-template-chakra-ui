import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxW="container.xl" width="95%" paddingBlock="5">
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
