"use client";

import Product from "@/components/common/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";

SwiperCore.use([Pagination]);

const ProductView = ({ products, lugar }) => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          fadeEffect={true}
          spaceBetween={20}
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
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            bulletElement: "span",
            type: "bullets",
          }}
          className="max-w-7xl min-w-72"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Product
                nombre={product.title}
                imagen={product.urlImage}
                lugar={lugar}
                dinero={product.price}
                id={product._id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductView;
