import ProductView from "@/components/common/ProductView/ProductView";
import {
  getDataCeprobis,
  getDataCholo,
  getDataComoEnCasa,
  getDataPanificadora,
} from "@/utils/fetchData";
import { Button } from "@nextui-org/react";
import "swiper/css";

export default async function Home() {
  const dataCholo = await getDataCholo(4);
  const dataCeprobis = await getDataCeprobis(4);
  const dataPanificadora = await getDataPanificadora(4);
  const dataComoEnCasa = await getDataComoEnCasa(4);
  return (
    <main className="flex-col items-center">
      <div
        className="h-3/5 w-full mb-12 pl-5 sm:pl-10 md:pl-32 py-12 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/FondoHome.png')` }}
      >
        <p className="text-white font-bold text-4xl sm:text-6xl drop-shadow-xl mb-3">
          ¿No te gusta lo que comes?
        </p>
        <p className="text-gray-700 text-tiny sm:text-base">
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
      <section className="justify-center w-4/5 mx-auto mb-10">
        <h2 className="text-2xl">Productos del dia del Cholo</h2>
        <ProductView products={dataCholo} lugar="El Cholo" />
      </section>
      <section className="justify-center w-4/5 mx-auto mb-10">
        <h2 className="text-2xl">Productos del dia de Ceprobis</h2>
        <ProductView products={dataCeprobis} lugar="El Cholo" />
      </section>
      <section className="justify-center w-4/5 mx-auto mb-10">
        <h2 className="text-2xl">Productos del dia de la Panificadora UCSM</h2>
        <ProductView products={dataPanificadora} lugar="El Cholo" />
      </section>
      <section className="justify-center w-4/5 mx-auto mb-10">
        <h2 className="text-2xl">Productos del dia de Como en Casa</h2>
        <ProductView products={dataComoEnCasa} lugar="El Cholo" />
      </section>
    </main>
  );
}
