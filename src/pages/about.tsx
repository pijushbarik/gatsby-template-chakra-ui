import React from "react";
import { PageProps } from "gatsby";
import SEO from "components/SEO";
import About from "components/About";

const AboutPage: React.FC<PageProps> = () => (
  <>
    <SEO title="About" />
    <About />
  </>
);

export default AboutPage;
