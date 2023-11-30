import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartProducts: [],
  totalPrice: 0,

  addProduct: (image, name, place, price, id) => {
    set((state) => {
      return {
        cartProducts: [
          ...state.cartProducts,
          {
            id,
            image,
            name,
            place,
            price,
          },
        ],
        totalPrice: state.totalPrice + price,
      };
    });
  },
  cleanProducts: () => {
    set({
      cartProducts: [],
      totalPrice: 0,
    });
  },
  removeProduct: (id) => {
    set((state) => {
      const updatedCartProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );

      const removedProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      return {
        cartProducts: updatedCartProducts,
        totalPrice:
          state.totalPrice - (removedProduct ? removedProduct.price : 0),
      };
    });
  },
}));
