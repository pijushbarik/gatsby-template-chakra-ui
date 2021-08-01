import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./index";

type ProviderProps = {
  element: ReactNode;
  resetCSS?: boolean;
  portalZIndex?: number;
};

const ThemeProvider: React.FC<ProviderProps> = props => {
  return (
    <ChakraProvider
      theme={theme}
      resetCSS={props.resetCSS || true}
      portalZIndex={props.portalZIndex || 40}
    >
      {props.element}
    </ChakraProvider>
  );
};

export default ThemeProvider;
