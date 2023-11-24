"use client";
import React from "react";
import { useCartStore } from "@/store/cartStore";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

const Product = ({ imagen, nombre, lugar, dinero, id }) => {
  const { addProduct } = useCartStore();
  const handleAdd = () => {
    addProduct(imagen, nombre, lugar, dinero, id )
  }
  return (
    <Card className="py-4 flex gap-5 flex-col ">
      <CardHeader className="pb-0 pt-2 px-4 flex justify-center">
        <Image
          alt="Card background"
          className="object-contain rounded-xl h-28 w-52"
          src={imagen} // Desde props
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 space-y-2">
        <p className="text-tiny uppercase font-bold">{nombre}</p>
        <small className="flex text-lime-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          {lugar}
        </small>
        <h4 className="font-bold text-large">S/. {dinero}</h4>
        <Button
          className="text-tiny text-white color-greenBG font-bold"
          variant="shadow"
          color="default"
          radius="sm"
          size="md"
          onClick={handleAdd}
        >
          Ordenar ahora
        </Button>
      </CardBody>
    </Card>
  );
};

export default Product;
