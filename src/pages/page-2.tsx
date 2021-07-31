import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";

const SecondPage: React.FC<PageProps> = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
);

export default SecondPage;
