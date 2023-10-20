"use client";

import Product from "@/components/common/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductView = ({ products = [] }) => {
  return (
    <div className="justify-center w-4/5 h-auto mx-auto mb-10">
      <div className="swiper-container">
        <Swiper
          fadeEffect={false}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Product
                imagen={product.imagen}
                nombre={product.nombre}
                lugar={product.lugar}
                dinero={product.dinero}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductView;
