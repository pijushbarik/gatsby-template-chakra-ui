import React from "react";
import { Container } from "@chakra-ui/react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = props => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      <Container width="95%" maxW="container.xl">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Container>
    </footer>
  );
};

export default Footer;
