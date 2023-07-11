import React from "react";
import clsx from "classnames";
import patterns from "assets/images/pattern.png";
import union from "assets/images/Union.svg";
import union2 from "assets/images/Union2.svg";
import herobt from "assets/images/herobt.png";
import { TopNav } from "components/navigation";
import texts from "assets/styles/texts";


const Hero = () => {
  return (
    <>
    <div className=" bg-[#D9D9D9] relative">
    <TopNav  />
      <img
        src={patterns}
        alt="background-patterns"
        className="absolute object-cover left-0 top-[150px] opacity-[.5] h-full w-full pointer-events-none select-none"
      />
      <div className="relative pb-[100px] xl:pb-0 mt-[10vh] xl:mt-[5vh] xl:h-[auto] xl:w-[auto] ">
         <div className="flex flex-col xl:flex-row-reverse  items-center justify-between max-w-[1200px] mx-auto">
          <div className="  flex items-center gap-[30px] xl:gap-[68px]">
            <img
            src={union}
            alt="background-patterns"
            className=" pointer-events-none select-none w-[108px] h-[224px] xl:w-[100%] xl:h-[100%]"
            />
            <img
            src={union2}
            alt="background-patterns"
            className=" pointer-events-none select-none w-[152px] h-[270px] xl:w-[100%] xl:h-[100%]"
            />
          </div>

          <div className="  flex flex-col mt-[50px] xl:mt-[14vh] items-center justify-center">
            <h2
              className={clsx(
                texts.berk_h2_bold,
                "animate__animated animate__fadeIn  text-start text-[47px] xl:text-[70px] xl:mr-[20px] px-[20px] xl:p-0  mx-auto xl:leading-[87px] text-mayhaven-blue xl:w-[585px]"
              )}
            >
              Innovate, grow and scale with us at  <span className="text-mayhaven-dark-brown"> Mayhaven</span>
            </h2>          
          </div>
         </div>
          <img
            src={herobt}
            alt="background-patterns"
            className="hidden xl:block max-w-[1200px] mx-auto mt-[40px] pb-10"
           />
       </div>
    </div>
    </>
  );
};

export default Hero;
