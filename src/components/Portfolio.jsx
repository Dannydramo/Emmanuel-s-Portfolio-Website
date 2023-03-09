import React, { Fragment } from "react";
import Gofast from "../assets/Gofast.png";
import Quantum from '../assets/Quantum.png'
const Portfolio = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="font-bold text-center my-12 text-2xl">Portfolio</h1>
        <div className="sm:ml-8 lg:ml-16 grid sm:grid-cols-2 gap-8">
          <div className="">
            <h1 className="font-bold text-2xl">Gofast</h1>
            <p className="my-2 text-lg lg:text-xl lg:leading-[34px]">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Quantum</h1>
            <p className="my-2 text-lg lg:text-xl lg:leading-[34px]">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Quantum} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Gofast</h1>
            <p className="my-2 text-lg lg:text-xl lg:leading-[34px]">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Gofast} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Quantum</h1>
            <p className="my-2 text-lg lg:text-xl lg:leading-[34px]">USER EXPERIENCE. UI DESIGN, INTERFACE DESIGN</p>
            <img src={Quantum} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
