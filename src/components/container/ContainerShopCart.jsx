const { Image, Link } = require("@nextui-org/react");
import { useCartStore } from "@/store/cartStore";
import axios from "axios";

const ContainerShopCart = ({ userId, userName, userEmail }) => {
  const { cartProducts, totalPrice } = useCartStore();
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
      await axios.post("/api/products/orders", data);
      console.log("datos enviados con exito", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-10">
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
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerShopCart;
