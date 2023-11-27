import ProductView from "@/components/common/ProductView/ProductView";
import {
  getDataCeprobis,
  getDataCholo,
  getDataComoEnCasa,
  getDataPanificadora,
} from "@/utils/fetchData";
import { Button, Image } from "@nextui-org/react";
import "swiper/css";
import { dataSVGHome } from "@/utils/svgData";

const dataSectionShop = [
  { name: "Panificadora UCSM", url: "/images/banner_panificadora.png" },
  { name: "Ceprobis UCSM", url: "/images/banner_ceprobis.png" },
  { name: "Como en Casa UCSM", url: "/images/banner_comoencasa.png" },
  { name: "El Cholo UCSM", url: "/images/banner_elcholo.png" },
];
export default async function Home() {
  const dataCholo = await getDataCholo(4);
  const dataCeprobis = await getDataCeprobis(4);
  const dataPanificadora = await getDataPanificadora(4);
  const dataComoEnCasa = await getDataComoEnCasa(4);
  return (
    <main className="flex-col items-center">
      <div
        className="h-3/5 w-full pl-5 sm:pl-10 md:pl-32 py-12 md:py-24 bg-cover bg-center"
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

      <section className="w-full flex justify-center bg-green-50 px-14 py-10 ">
        <ul className="flex flex-wrap gap-4 justify-around w-full  max-w-screen-2xl">
          {dataSVGHome.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-3 px-4 max-w-xs text-center"
            >
              <div>{item.svg}</div>
              <p>{item.title}</p>
              <p className="text-neutral-400 text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-amber-500 w-full px-14 py-10 justify-center flex shadowSectionShop">
        <ul className="flex gap-6 flex-wrap justify-center">
          {dataSectionShop.map((item, index) => (
            <li key={index} className="flex-col items-center flex gap-3">
              <Image
                src={item.url}
                alt={item.name}
                className="w-72 h-64 flex-shrink-0 object-cover   shadow-shadowComponent  "
              />
              <p className="text-white text-xl">{item.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="justify-center w-full mx-auto px-14 py-10 bg-green-50">
        <div className="mx-auto ">
          <ProductView products={dataCeprobis} lugar="El Cholo" />
        </div>
      </section>
    </main>
  );
}
