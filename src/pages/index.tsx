import React from "react";
import { Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "components/Layout";
import SEO from "components/SEO";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../assets/images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
);

export default IndexPage;
