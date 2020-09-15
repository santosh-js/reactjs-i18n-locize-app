import React from "react";
// import styles from "./Banner.module.css";
import main from "../../../../assets/carousels/main.jpg";
import one from "../../../../assets/carousels/one.jpg";
import two from "../../../../assets/carousels/two.jpg";
import three from "../../../../assets/carousels/three.jpg";
import four from "../../../../assets/carousels/four.jpeg";
import five from "../../../../assets/carousels/five.jpeg";
import six from "../../../../assets/carousels/six.jpg";
import seven from "../../../../assets/carousels/seven.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CustomBanner() {
  return (
    <Carousel
      autoPlay={true}
      useKeyboardArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      showArrows={false}
      interval={3000}
      transitionTime={600}
      stopOnHover={false}
      showIndicators={false}
      swipeable={true}
      dynamicHeight={true}
    >
      <div>
        <img src={main} alt="" />
      </div>
      <div>
        <img src={one} alt="" />
      </div>
      <div>
        <img src={two} alt="" />
      </div>
      <div>
        <img src={three} alt="" />
      </div>
      <div>
        <img src={four} alt="" />
      </div>
      <div>
        <img src={five} alt="" />
      </div>
      <div>
        <img src={six} alt="" />
      </div>
      <div>
        <img src={seven} alt="" />
      </div>
    </Carousel>
  );
}

export default CustomBanner;
