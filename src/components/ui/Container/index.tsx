import React from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";

interface ContainerProps extends ChakraContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <ChakraContainer
      {...props}
      maxW={props.fluid ? "container.xl" : "100%"}
      w={props.fluid ? "95%" : "100%"}
      padding={props.fluid ? undefined : 0}
    >
      {props.children}
    </ChakraContainer>
  );
};

export default Container;
