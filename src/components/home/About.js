import React from "react";
import clsx from "classnames";
import businessImage from "assets/images/businessImage.png";
import nigeriaImage from "assets/images/nigeriaImage.png";

import business from "assets/images/business.svg";
import nigeria from "assets/images/nigeria.svg";
import texts from "assets/styles/texts";
import herobt from "assets/images/herobt.png";

const About = () => {
  return (
    <div className="bg-mayhaven-white" id="about">
       <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-mayhaven-blue text-center mt-5 xl:mt-[70px] xl:text-[32px] xl:leading-10"
          )}
        >
          About <span className="text-mayhaven-brown">us</span>
        </h4>
      <div className=" pt-[32px] xl:pt-[50px] px-5  xl:px-[161px] xl:pb-[60px] max-w-largest mx-auto">
        <div className=" flex flex-col-reverse xl:flex-row  items-center max-w-[990px] mx-auto ">
            <div className="mt-[49px] xl:mt-0 max-w-[430px]">
              <img
               className="object-contain pointer-events-none select-none w-[54px] h-[44px] mb-[22px] xl:w-[130px] xl:h-[111px]"
               src={business}
               alt="business icon"
              />
              <h4 className={clsx(texts.berk_h4_bold, "text-mayhaven-blue", "w-[60%]")}>
                 Building Better Businesses
              </h4>
              <p className="mt-[10px] text-mayhaven-blue">
                 We are a fast growing innovation hub committed to helping entrepreneurs innovate
                 and scale their ventures. For over 3 years, we have served as a catalyst for 
                 entrepreneurial initiatives. Our community has provided a space where entrepreneurs 
                 and individuals with aspirations for a better world can come together, collaborate, 
                 and transform their ideas into tangible outcomes.
              </p>
            </div>
            <div className="hidden xl:block flex-shrink-0 mx-auto xl:mx-0 xl:ml-[126px]">
             <img
              className="object-contain pointer-events-none select-none w-[100%] h-[294px] xl:w-[450px] xl:h-[450px]"
              src={businessImage}
              alt="people talking"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse xl:flex-row  items-center justify-between max-w-[990px] mx-auto">
            <div className=" flex-shrink-0 ">
             <img
              className=" hidden xl:block  object-contain pointer-events-none select-none w-[100%] h-[294px] xl:w-[450px] xl:h-[450px]"
              src={nigeriaImage}
              alt="people talking"
              />
            </div>
            <div className="mt-[49px] xl:mt-0 max-w-[430px]">
              <img
               className="object-contain pointer-events-none select-none w-[54px] h-[44px] mb-[22px] xl:w-[130px] xl:h-[111px]"
               src={nigeria}
               alt="business icon"
              />
              <p className="mt-[10px] text-mayhaven-blue">
               Nigeria is currently confronted with intricate economic challenges that necessitate 
              collective efforts to address. This is why we foster collaboration, and facilitate 
              connections between entrepreneurs, innovators, prominent organizations, investors, 
              and the public sector to foster widespread, inclusive, and sustainable innovation. 
              We firmly believe that this is the time for new micro and macro economies to emerge,
              and that entrepreneurship development is the most effective way to make a difference.

              </p>
            </div>
          </div>
          <img
            src={herobt}
            alt="background-patterns"
            className=" hidden xl:block  max-w-[1100px] mx-auto mt-[68px]"
           />
        </div>
      </div>
  );
};

export default About;
