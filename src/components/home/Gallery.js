import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import gallery1 from "assets/images/gallery/box.png";
import gallery2 from "assets/images/gallery/box.png";
import gallery3 from "assets/images/gallery/box.png";
import gallery4 from "assets/images/gallery/box.png";

// import gallery1 from "assets/images/gallery-.webp";

const GalleryImage = ({ src, className }) => {
  return (
    <img
      className={clsx(" object-cover mb-[50px]", className)}
      src={src}
      alt={"mayhaven gallery"}
    ></img>
  );
};

const Gallery = () => {
  return (
    <div
      className="bg-berk-white pt-[58px]  xl:py-[105px]"
      id="gallery"
    >
      <h4
        className={clsx(
          texts.berk_h4_bold,
          "text-berk-black text-center xl:text-[32px] xl:leading-10 mb-10"
        )}
      >
        Gallery
      </h4>
      <div className="xl:hidden mx-auto max-w-[337px] flex flex-col ">
        <GalleryImage
          src={gallery1}
          className={
            ""
          }
        />
         <GalleryImage
          src={gallery2}
          className={
            ""
          }
        />
         <GalleryImage
          src={gallery3}
          className={
            ""
          }
        />
         <GalleryImage
          src={gallery4}
          className={
            ""
          }
        />
      </div>
      <div className="hidden xl:flex items-center gap-5 justify-center max-w-[1200px] mx-auto ">
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>

      </div>

      <div className="hidden xl:flex items-center gap-5 justify-center max-w-[1200px] mx-auto xl:mt-[50px] ">
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>
        <img src={gallery1} alt="Mayhaven Gallery" className="w-[300px]"/>

      </div>
    </div>
  );
};

export default Gallery;
