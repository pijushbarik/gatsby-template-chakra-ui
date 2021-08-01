import styled from "@emotion/styled";
import { Link } from "gatsby";
import theme from "theme";

export const NavigationItem = styled(Link)`
  font-size: 1rem;
  color: ${theme.colors.gray[800]};
  position: relative;
  width: max-content;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: transparent;

  &.active {
    border-bottom-color: ${theme.colors.primary};
  }

  &:before {
    position: absolute;
    width: 100%;
    background: ${theme.colors.primary};
    height: 1px;
    left: 0;
    visibility: hidden;
    content: "";
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;

  li:not(:last-child) {
    margin-right: 1rem;
  }
`;
