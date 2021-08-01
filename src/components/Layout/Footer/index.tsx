import React from "react";
import { Container, Grid, Box, HStack, VStack } from "@chakra-ui/react";
import * as Styled from "./styles";

type FooterProps = {
  siteTitle: string;
};

const Footer: React.FC<FooterProps> = props => {
  return (
    <Styled.Footer>
      <Container width="95%" maxW="container.xl">
        <VStack spacing="2.5rem">
          <Grid gap={6} templateColumns="repeat(3, 1fr)" w="100%">
            <Styled.SiteTitle>{props.siteTitle}</Styled.SiteTitle>

            <VStack alignItems="flex-start" spacing="5px">
              <Styled.Link to="/terms-and-conditions/">
                Terms &amp; conditions
              </Styled.Link>
              <Styled.Link to="/privacy-policy/">Privacy policy</Styled.Link>
              <Styled.Link to="/contact/">Contact us</Styled.Link>
            </VStack>

            <HStack alignItems="flex-start">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>YouTube</span>
            </HStack>
          </Grid>

          <Styled.Copyright>
            &copy; {new Date().getUTCFullYear()}. {props.siteTitle}
          </Styled.Copyright>
        </VStack>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
