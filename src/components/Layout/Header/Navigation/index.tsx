import React from "react";
import * as Styled from "./styles";
import { motion } from "framer-motion";

type NavigationItem = {
  title: string;
  slug: string;
};

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "About",
    slug: "/about/",
  },
  {
    title: "Contact",
    slug: "/contact/",
  },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <Styled.NavigationList>
        {navigationItems.map(item => (
          <motion.li whileTap={{ scale: 0.9 }}>
            <Styled.NavigationItem
              to={item.slug}
              key={item.slug}
              activeClassName="active"
            >
              {item.title}
            </Styled.NavigationItem>
          </motion.li>
        ))}
      </Styled.NavigationList>
    </nav>
  );
};

export default Navigation;
