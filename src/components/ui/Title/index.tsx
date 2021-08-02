import React from "react";
import * as Styled from "./styles";
import { Box } from "@chakra-ui/react";

type TitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const Title: React.FC<TitleProps> = props => {
  return (
    <Box marginBlockEnd="10">
      <Styled.Title centered={props.centered}>{props.title}</Styled.Title>
      {props.subtitle ? (
        <Styled.Subtitle centered={props.centered}>
          {props.subtitle}
        </Styled.Subtitle>
      ) : null}

      <Styled.Separator centered={props.centered} />
    </Box>
  );
};

export default Title;
