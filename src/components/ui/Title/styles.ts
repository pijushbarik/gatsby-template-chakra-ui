import styled from "@emotion/styled";
import theme from "theme";

type TitleProps = {
  centered?: boolean;
};

export const Title = styled.h2<TitleProps>`
  font-size: 1.6rem;
  color: ${theme.colors.primary};
  text-align: ${props => (props.centered ? "center" : "left")};
  line-height: 1.1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -1px;
`;

export const Subtitle = styled.h4<TitleProps>`
  color: ${theme.colors.red[500]};
  text-align: ${props => (props.centered ? "center" : "left")};
  line-height: 1.1;
  font-size: 2rem;
  font-weight: 200;
  text-transform: lowercase;
`;

export const Separator = styled.div<TitleProps>`
  position: relative;
  height: 2rem;
  width: 0.5rem;
  margin: ${props => (props.centered ? "auto" : 0)};
  margin-bottom: 1.5rem;
  margin-top: 0.3rem;

  &:before {
    content: "";
    background-color: ${theme.colors.red[500]};
    height: 100%;
    width: 1px;
    position: absolute;
    left: 0;
  }

  &:after {
    content: "";
    background-color: ${theme.colors.red[700]};
    height: 1.5rem;
    width: 1px;
    position: absolute;
    margin-left: 0.25rem;
  }
`;
