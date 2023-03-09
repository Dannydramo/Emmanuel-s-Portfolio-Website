import React, { Fragment } from "react";
import EmmaImage from "../assets/Mask group.png";
import Emoji from "../assets/emoji.png";
import Group from "../assets/Group 3.png"

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center h-[90%] pt-8 lg:pt-20">
          <div className="sm:ml-8 lg:ml-16">
            <img src={Emoji} alt="" className="hidden sm:block" />
            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold my-6 w-full xl:w-[100%] pt-6 sm:mt-0 leading-[74px]">
              A Pragmatist embodied with creativity and versatility
            </h1>
            <p className="text-lg">
              At the heart of Design is an opportunity to problem solve
            </p>
            <img src={Group} alt="" className="w-[70px] h-[70px] hover:scale-150 cursor-pointer hover:mt-4 hover:ease-in hover:duration-150"/>
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
