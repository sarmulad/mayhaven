import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import people from "assets/images/people.svg";

const  Events = () => {
  return (
    <div className="bg-black/[1] relative pb-[100px] xl:pb-0">
      <img
        src={people}
        alt="background-people"
        className="absolute object-cover left-0 top-0 opacity-[.8] h-full w-full pointer-events-none select-none"
      />
      <div
        className="max-w-[880px] mx-auto px-5 pt-[59px] xl:pt-[50px]"
        id="events"
       >
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-white text-center mb-12 xl:text-[32px] xl:leading-10"
          )}
        >
          Events
        </h4>
        <div>
          <div className="flex flex-col space-y-[15px]">
            <h5
              className={clsx(
                texts.berk_h5_bold,
                "text-mayhaven-dark-brown text-[20px] xl:text-[24px] xl:leading-[30px]"
              )}
            >
             Building Beyond Ife
            </h5>
            <p className="text-mayhaven-white font-weight-[400px] leading-loose mb-4 xl:pt-[10px] xl:mb-[40px] md:text-[18px]">
              Building Beyond Ife is an annual conference aimed at bringing together 
              past and present innovators to discuss, analyze and proffer solutions to 
              issues/challenges facing the startup/entrepreneurship ecosystem across university 
              communities in Nigeria, using Obafemi Awolowo University as a reference point. 
              The conference is a CSR project from Mayhaven Innovation aimed at setting a new 
              frontier for the startup ecosystem in Nigeria, while also ensuring that founders 
              succeed as much as possible in this new digital economy.

            </p>
            <p className="text-mayhaven-white font-weight-[400px] leading-loose mb-8 xl:pb-[130px] xl:pt-[10px] xl:mb-[58px] md:text-[18px]">
             The first edition of the conference was held in July, 2021, the event had over
              500 participants with 15 guest speakers and panelists. The event held at the
              ICT conference center, Obafemi Awolowo University, with keynote speakers which 
              included; Obasegun Tekena (Co-Founder/CTO, Vilsquare), Kelvin Umechukwu (CEO, Bumpa), 
              and a host of other young founders building and scaling amazing products across the 
              globe.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
