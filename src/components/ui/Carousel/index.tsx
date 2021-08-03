import React from "react";
import Slick, { Settings } from "react-slick";
import Helmet from "react-helmet";

type CarouselProps = {
  slickSettings: Settings;
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = props => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Helmet>
      <Slick {...props.slickSettings}>{props.children}</Slick>
    </>
  );
};

export default Carousel;
