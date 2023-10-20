"use client";
import Product from "@/components/common/Product/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const ElCholo = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("/api/products/elcholo");
    return setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("productos", products);
  return (
    <section className="flex flex-col items-center my-10 mx-96 gap-8">
      <h1 className="self-start">El Cholo</h1>
      <section className="flex flex-col gap-7">
        <h2>Productos</h2>
        <div className="flex gap-6">
          {products.map((item, index) => (
            <Product
              key={index}
              nombre={item.title}
              imagen={item.urlImage}
              lugar="El Cholo"
              dinero={item.price}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ElCholo;
