import React, { useEffect } from "react";
// import styles from "./Banner.module.css";
import main from "../../../../assets/main.jpg";
import one from "../../../../assets/one.jpg";
import two from "../../../../assets/two.jpg";
import three from "../../../../assets/three.jpg";
import four from "../../../../assets/four.jpeg";
import five from "../../../../assets/five.jpeg";
import six from "../../../../assets/six.jpg";
import seven from "../../../../assets/seven.jpg";

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
    >
      <div>
        <img src={main} />
      </div>
      <div>
        <img src={one} />
      </div>
      <div>
        <img src={two} />
      </div>
      <div>
        <img src={three} />
      </div>
      <div>
        <img src={four} />
      </div>
      <div>
        <img src={five} />
      </div>
      <div>
        <img src={six} />
      </div>
      <div>
        <img src={seven} />
      </div>
    </Carousel>
  );
}

export default CustomBanner;
