import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

const Product = ({ imagen, nombre, lugar, dinero }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imagen} // Desde props
          width={270}
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
          className="text-tiny text-white bg-green-800 font-bold"
          variant="shadow"
          color="default"
          radius="sm"
          size="md"
        >
          Ordenar ahora
        </Button>
      </CardBody>
    </Card>
  );
};

export default Product;
