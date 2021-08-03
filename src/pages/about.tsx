import React from "react";
import { PageProps } from "gatsby";
import SEO from "components/SEO";
import About from "components/About";
import Container from "components/ui/Container";

const AboutPage: React.FC<PageProps> = () => (
  <Container fluid>
    <SEO title="About" />
    <About />
  </Container>
);

export default AboutPage;
