import React, { CSSProperties } from "react";
import Cropped from "./../images/cropped.jpg";
import Photo1 from "./../images/photo1.jpg";
import Photo2 from "./../images/photo2.jpg";
import Photo3 from "./../images/photo3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Tribute = () => {
  return (
    <div className="h-full m-4">
      <div className="container m-auto">
        <div id="images-container md:h-1/2 ">
          <Carousel axis="horizontal" className="">
            <div>
              <img src={Photo1} alt="Kenisha 2" className="w-1/4 rounded-lg" />
            </div>
            <div>
              {" "}
              <img src={Photo2} alt="Kenisha 3" className="w-1/4 rounded-lg" />
            </div>
            <div>
              <img src={Photo3} alt="Kenisha 4" className="w-1/4 rounded-lg" />
            </div>
            <div>
              <img
                src={Cropped}
                alt="Kenisha 1"
                className="rounded-lg shadow-lg"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Tribute;
