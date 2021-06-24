import React from "react";

const CopdBlock = () => {
  return (
    <section className="h-screen mt-36">
      <div className="bg-secondary mx-auto container">
        <div className=" p-4 m-auto h-auto ">
          <div className="bg-main mt-20 mx-auto w-6/12 h-6/12 rounded-t-lg">
            <h3 className="text-secondary text-xl pt-5">COPD AWARENESS</h3>
            <p className=" break-words text-justify p-4 text-primary md:text-xl tracking-wide">
              Chronic obstructive pulmonary disease (COPD) is a chronic
              inflammatory lung disease that causes obstructed airflow from the
              lungs. Symptoms include breathing difficulty, cough, mucus
              (sputum) production and wheezing. It's typically caused by
              long-term exposure to irritating gases or particulate matter, most
              often from cigarette smoke. People with COPD are at increased risk
              of developing heart disease, lung cancer and a variety of other
              conditions.
            </p>
          </div>
          <div className="bg-main-two mb-20 mx-auto w-6/12 h-36 p-4 rounded-b-lg">
            <div className="p-3 bg-secondary   mx-3 rounded-lg shadow-md">
              <h4 className="text-lg">Wish to make a donation? </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopdBlock;
