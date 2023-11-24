import React from "react";
import { Image } from "@nextui-org/react";

const Banner = ({ name, img_src }) => {
  return (
    <div className="relative">
      <Image className="rounded-none w-full" src={img_src}></Image>
      <div className="absolute bottom-12 left-0 w-2/5">
        <Image className="rounded-none" src="/images/page_name.png"></Image>
      <div className="absolute z-50 bottom-4 left-5 text-6xl text-white font-semibold">
        <p>{name}</p>
      </div>
      </div>
    </div>
  );
};

export default Banner;
