import React, { Fragment } from "react";
import Gofast from "../assets/Gofast.png";
const Portfolio = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="font-bold text-center my-12 text-2xl">Portfolio</h1>
        <div className="ml-6 sm:ml-8 lg:ml-16 grid sm:grid-cols-2 gap-4">
          <div className="text-lg">
            <h1>Gofast</h1>
            <p className="my-2">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
          <div className="text-lg">
            <h1>Quantum</h1>
            <p className="my-2">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
          <div className="text-lg">
            <h1>Gofast</h1>
            <p className="my-2">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
          <div className="text-lg">
            <h1>Gofast</h1>
            <p className="my-2">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
