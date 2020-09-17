import React from "react";
// import styles from "./Banner.module.css";
import main from "../../../../assets/banners/banner-vid.mov";
// import one from "../../../../assets/carousels/one.jpg";
// import two from "../../../../assets/carousels/two.jpg";
// import three from "../../../../assets/carousels/three.jpg";
// import four from "../../../../assets/carousels/four.jpeg";
// import five from "../../../../assets/carousels/five.jpeg";
// import six from "../../../../assets/carousels/six.jpg";
// import seven from "../../../../assets/carousels/seven.jpg";

import ReactPlayer from "react-player";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Banner.module.css";

function CustomBanner() {
  return (
    <Carousel
      autoPlay={false}
      useKeyboardArrows={false}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      interval={0}
      transitionTime={600}
      stopOnHover={false}
      showIndicators={false}
      swipeable={false}
      dynamicHeight={true}
    >
      <ReactPlayer url={main} playing loop width="100%" height="100%" />
    </Carousel>
  );
}

export default CustomBanner;
