import React from "react";
// import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";
import { contact } from "utils/constants";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="  text-white px-5 xl:px-0 max-w-[1200px] gap-y-[40px] xl:gap-y-0 mx-auto flex flex-col items-start  xl:flex-row xl:justify-between py-[71px] justify-center">
        <div>
          <h2 className="text-white text-[24px] font-bold leading-normal xl:mb-[15px]">Contacts</h2>
          <a
            href={`tel:${contact.phone}`}
            className="flex text-mayhaven-white font-weight-[400px] leading-loose"
          >
            Website:- www.mayhavenhub.com
          </a>
          <a
            href={contact.whatsapp}
            className="flex text-mayhaven-white font-weight-[400px] leading-loose"
          >
            Whatsapp:-09079313294
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex text-mayhaven-white font-weight-[400px] leading-loose"
          >
            Call:- 09079313294
          </a>

        </div>
        <div>
          <h2 className="text-white text-[24px] font-bold leading-normal xl:mb-[15px]">Location</h2>
           <p>Bolapat Court Building, Mayfair, Ile-Ife</p>
        </div>

        <div className="flex flex-col gap-y-3 ">
          <h2 className="text-white text-[24px] font-bold leading-normal xl:mb-[15px]">Get in Touch</h2>
           <p className="text-white text-[15px] font-normal leading-normal xl:mb-[15px]">Subscribe to our newsletter</p>
           <form>
             <input type="email" placeholder="Enter your Email" className=" text-[16px] h-[40px] bg-white p-5 focus:outline-none"/>
             <button type="submit" className="bg-mayhaven-brown  h-[40px] px-5 mt-5 xl:mt-0">Subscribe</button>
           </form>
        </div>

      </div>
      
    </div>
  );
};

export default Footer;
