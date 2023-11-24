import React from "react";
import { Image } from "@nextui-org/react";

const Banner = ({ name, img_src }) => {
  return (
    <div className="relative">
      <Image className="rounded-none" src="/images/banner_ceprobis.png"></Image>
      <div className="absolute bottom-12 left-0 w-2/5">
        <Image className="rounded-none" src="/images/page_name.png"></Image>
      </div>
      <div className="absolute z-50 bottom-16 left-5 text-6xl text-white font-">
        <p>CEPROBIS</p>
      </div>
    </div>
  );
};

export default Banner;
