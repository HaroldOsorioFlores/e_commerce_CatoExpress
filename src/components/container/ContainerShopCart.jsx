const { Image, Link } = require("@nextui-org/react");
import { useCartStore } from "@/store/cartStore";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ContainerShopCart = ({ userId, userName, userEmail }) => {
  const [LoadSpinner, setLoadSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { cartProducts, totalPrice, cleanProducts } = useCartStore();
  const uniqueProducts = [...new Set(cartProducts.map((p) => p.id))];
  const products = uniqueProducts.map((id) => {
    // Obtener producto por id
    const product = cartProducts.find((p) => p.id === id);

    // Obtener cantidad
    const quantity = cartProducts.reduce((acc, cp) => {
      if (cp.id === id) {
        return acc + 1;
      }
      return acc;
    }, 0);

    // Calcular total
    const totalPrice = product.price * quantity;

    return {
      title: product.name,
      price: product.price,
      quantity,
      totalPrice,
    };
  });
  console.log("los productos del carrito son: ", products);
  const data = {
    idClient: userId,
    nameClient: userName,
    emailClient: userEmail,
    products: products,
    quantity: cartProducts.length,
    priceTotal: totalPrice,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadSpinner(true);
      await axios.post("/api/products/orders", data);
      console.log("datos enviados con exito a mongoDB", data);
      await axios.post("/api/sendEmail", data);
      setLoadSpinner(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        cleanProducts();
      }, 3000);
      console.log("datos enviados con exito al api sendEmail", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-10">
      {showAlert ? (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="inline-block align-middle mr-8">
            Tu pago se realizo con exito !!
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
      <ul className="-my-6 divide-y divide-gray-200 ">
        {uniqueProducts.map((id) => {
          const product = cartProducts.find((p) => p.id === id);
          return (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p className="ml-4">S/. {product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="text-gray-500 flex gap-2">
                    Cantidad:
                    <p>
                      {cartProducts.reduce((count, cartProduct) => {
                        return cartProduct.id === product.id
                          ? count + 1
                          : count;
                      }, 0)}
                    </p>
                  </div>

                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-gray-200 w-full">
        <div className="flex justify-between text-base font-medium text-gray-900 w-full">
          <p>Total</p>
          <p>S/. {totalPrice}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-96"
            onClick={handleSubmit}
          >
            {LoadSpinner ? <Spinner color="default" /> : <p>Pagar</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerShopCart;
