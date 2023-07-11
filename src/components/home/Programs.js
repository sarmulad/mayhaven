import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import ProgramsCards from "./ProgramsCards";


const Programs = () => {
  return (
    <div className="bg-white xl:pb-[200px]">
      <div
        className="max-w-[880px] mx-auto px-5 pt-[59px] xl:pt-[50px] "
        id="programs"
      >
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-mayhaven-blue text-center mb-12 xl:text-[32px] xl:leading-10"
          )}
        >
          Programs
        </h4>
        <div>
          <div className="flex flex-col space-y-[15px]">
            <h5
              className={clsx(
                texts.berk_h5_bold,
                "text-mayhaven-dark-brown xl:text-[24px] xl:leading-[30px]"
              )}
            >
             The 6th Circuit
            </h5>
            <p className="text-mayhaven-blue font-weight-[400px] leading-loose mb-8 xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[18px]">
               A monthly business bootcamp for entrepreneurs (early stage founders and SME owners).
               Our mission at Mayhaven is to power creation of new market innovation channels 
               for entrepreneurs through quality business advisory, leadership management, 
               and capacity development trainings
            </p>
          </div>
          <div className="max-w-[987px] h-[0px] border border-amber-500 my-[49px] xl:my-0 xl:mb-[83px]"></div>
          <div className="flex flex-col space-y-[15px]">
            <h5
              className={clsx(
                texts.berk_h5_bold,
                "text-mayhaven-dark-brown xl:text-[24px] xl:leading-[30px]"
              )}
            >
            The Mayhaven Institute
            </h5>
            <p className="text-mayhaven-blue font-weight-[400px] leading-loose mb-8 xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[18px]">
              Our mission is to accelerate talent and cultivate the next generation of world-class 
              technologists, entrepreneurs, and creatives. Through immersive learning experiences, 
              mentorship from industry experts, and unparalleled resources, we empower learners with 
              the skills and knowledge needed to solve complex problems and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
      <ProgramsCards/>
    </div>
  );
};

export default Programs;
