"use client";
import ContainerShopCart from "@/components/container/ContainerShopCart";
import { useCartStore } from "@/store/cartStore";

const ShopCart = () => {
  const { cartProducts } = useCartStore();
  return (
    <section className="flex flex-col my-10 mx-10 gap-8 items-center">
      {cartProducts.length === 0 ? (
        <section className="w-full">
          <p>Tu carrito está vacío.</p>
        </section>
      ) : (
        <section className="w-full flex flex-col gap-7 items-center max-w-6xl">
          <section className="w-full">
            <h2>Tu carrito</h2>
          </section>
          <section className="w-full flex flex-col ">
            <ContainerShopCart fetchData={cartProducts} />
          </section>
        </section>
      )}
    </section>
  );
};

export default ShopCart;
