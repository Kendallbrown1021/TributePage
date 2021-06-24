import React, { CSSProperties } from "react";
import Cropped from "./../images/cropped.jpg";
import Photo1 from "./../images/photo1.jpg";
import Photo2 from "./../images/photo2.jpg";
import Photo3 from "./../images/photo3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Tribute = () => {
  return (
    <section id="tribute" className="h-screen m-4 mb-72 object-contain">
      <div className="container m-auto">
        <div id="images-container md:h-full max-w-lg object-contain ">
          <Carousel axis="horizontal" className=" md:h-24 max-w-lg mx-auto">
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
    </section>
  );
};

export default Tribute;
