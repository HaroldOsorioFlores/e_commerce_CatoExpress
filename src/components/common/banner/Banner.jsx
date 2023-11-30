import React from "react";
import { Image } from "@nextui-org/react";

const Banner = ({ name, img_src }) => {
  return (
    <div className="relative">
      <Image className="rounded-none w-screen" src={img_src} alt={name}></Image>
      <div className="absolute bottom-12 left-0 w-2/5 bg-black flex items-center justify-center">
        <Image className="rounded-none" src="/images/page_name.png" alt={name}></Image>
        <div className="absolute z-10 left-1 sm:left-3 md:left-4 lg:left-5 text-white font-semibold text-xl sm:text-3xl md:text-5xl lg:text-7xl">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
