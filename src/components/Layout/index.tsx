import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import { motion } from "framer-motion";

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
      <Container maxW="container.xl" width="95%">
        <motion.main
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {props.children}
        </motion.main>
      </Container>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};

export default Layout;
