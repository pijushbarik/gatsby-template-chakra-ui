/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require("react");
const Layout = require("./src/components/Layout").default;
const ThemeProvider = require("./src/theme/Provider").default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider element={element} />;
};
