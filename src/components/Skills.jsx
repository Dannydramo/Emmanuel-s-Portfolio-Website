import React, { Fragment } from "react";
import Circle from "../assets/Ellipse 5.png";

const Skills = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row justify-between sm:ml-8 lg:ml-16 mt-10">
          <div className="text-lg">
            <p className="mb-8 mt-8 sm:mt-0 font-semibold">Some of my core skills </p>

            <div className="">
              <p>Design</p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                UX/UI Design
              </p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                Prototyping
              </p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                Wireframing, Iconography
              </p>
            </div>
            <div className="">
              <p className="mt-8">Research</p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                User Research, Personas
              </p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                User Flow
              </p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                Journey Mapping
              </p>
              <p className="flex items-center">
                <img src={Circle} alt="" className="mr-2 my-4" />
                Competitive Analysis E.T.C
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/5">
            <p className="mb-8 text-lg"> Hi there, I am Emmanuel Amaechi. </p>

            <p className="text-lg">
              A creative UX UI Designer passionate about designing seamless user
              interface and experience on Mobile, Web and Desktop applications,
              I provide solutions to user problem by crafting high standard User
              interface Design.
            </p>

            <p className="mt-8 text-lg">
              I am passionate about creating universal solutions for users of
              all backgrounds using UX research methods and empathizing with the
              end users' needs. With my experience cutting across FinTech,
              Beauty Tech, Logistics/Delivery, Attorneys, Food, ED Tech, Travel
              Agencies E.T.C, I am eager to use my design skills to positively
              impact and create unique innovations in a collaborative and
              cognitively diverse environment.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
