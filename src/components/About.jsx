import React, { Fragment } from "react";
import EmmaImage from "../assets/Mask group.png";
import Emoji from "../assets/emoji.png";

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center h-[90%] pt-8 lg:pt-20">
          <div className="sm:ml-8 lg:ml-16">
            <img src={Emoji} alt="" className="hidden sm:block" />
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold my-8 w-full xl:w-[100%] pt-6 sm:mt-0">
              A Pragmatist embodied with creativity and versatility
            </h1>
            <p className="text-lg">
              At the heart of Design is an opportunity to problem solve
            </p>
          </div>
          <img
            src={EmmaImage}
            alt=""
            className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%]"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
