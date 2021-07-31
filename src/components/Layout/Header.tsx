import React from "react";
import { Link } from "gatsby";
import { Container } from "@chakra-ui/react";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = props => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Container w="95%" maxW="container.xl" paddingBlock="5" paddingInline="4">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </Container>
    </header>
  );
};

export default Header;
