import React from "react";
import { Link } from "gatsby";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import Navigation from "./Navigation";
import * as Styled from "./styles";
import { StaticImage } from "gatsby-plugin-image";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = props => {
  return (
    <Styled.Header>
      <Container w="95%" maxW="container.xl" paddingBlock="5" paddingInline="4">
        <Flex alignItems="center">
          <Flex alignItems="center">
            <StaticImage
              src="../../../assets/images/gatsby-icon.png"
              alt={props.siteTitle}
              layout="fixed"
              width={48}
              height={48}
            />
            <Styled.SiteTitle>
              <Link to="/">{props.siteTitle}</Link>
            </Styled.SiteTitle>
          </Flex>

          <Spacer />

          <Navigation />
        </Flex>
      </Container>
    </Styled.Header>
  );
};

export default Header;
