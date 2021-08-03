import React from "react";
import { Link } from "gatsby";
import { Flex, Spacer } from "@chakra-ui/react";
import Navigation from "./Navigation";
import * as Styled from "./styles";
import { StaticImage } from "gatsby-plugin-image";
import Container from "components/ui/Container";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = props => {
  return (
    <Styled.Header>
      <Container fluid paddingInline="4" paddingBlock="5">
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
