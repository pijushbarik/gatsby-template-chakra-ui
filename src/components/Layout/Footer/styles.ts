import styled from "@emotion/styled";
import theme from "theme";
import { Link as GatsbyLink } from "gatsby";

export const Footer = styled.footer`
  padding: 5rem 0;
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.whiteAlpha[900]};
`;

export const SiteTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const Copyright = styled.p`
  color: ${theme.colors.whiteAlpha[500]};
  font-size: 0.8rem;
`;

export const Link = styled(GatsbyLink)`
  color: ${theme.colors.whiteAlpha[900]};
  text-decoration: underline;
  transition: color ease 0.2s;

  &:hover {
    color: ${theme.colors.white};
  }
`;
