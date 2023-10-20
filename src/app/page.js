import Product from "@/components/common/Product/Product";
import { Button, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-3/5 w-full mb-12 pl-32 py-24 bg-cover bg-center" style={{backgroundImage: `url('/images/FondoHome.png')`}}>
        <p className="text-white font-bold text-6xl drop-shadow-xl mb-3">
          ¿No te gusta lo que comes?
        </p>
        <p className="text-gray-700">
          Te damos opciones desde Arroz con huevo hasta Lomo Saltado
        </p>
        <Button
          className="bg-gradient-to-r from-green-800 to-lime-600 text-white px-10 font-bold py-6 text-sm mt-16"
          radius="sm"
          color="gradient"
          variant="shadow"
        >
          Reserva tu menú ahora
        </Button>
      </div>
      <div className="flex justify-center w-4/5 h-auto mx-auto space-x-2 mb-10">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </main>
  );
}
