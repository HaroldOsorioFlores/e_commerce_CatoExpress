"use client";
import ContainerShopCart from "@/components/container/ContainerShopCart";
import { useCartStore } from "@/store/cartStore";
import { useSearchParams } from "next/navigation";

const ShopCart = () => {
  const { cartProducts } = useCartStore();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const userName = searchParams.get("userName");
  const userEmail = searchParams.get("userEmail");
  console.log("shopcart: ", userEmail);
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
            <ContainerShopCart
              fetchData={cartProducts}
              userId={userId}
              userName={userName}
              userEmail={userEmail}
            />
          </section>
        </section>
      )}
    </section>
  );
};

export default ShopCart;
