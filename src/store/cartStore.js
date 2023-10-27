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
}));
