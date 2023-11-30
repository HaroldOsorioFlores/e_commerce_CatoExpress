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
  const dataCeprobis = await getDataCeprobis(4);

  return (
    <main className="flex-col items-center ">
      <div className="relative ">
        <Image
          className="rounded-none w-screen h-auto xl:h-unit-9xl shadowImageHome"
          src="/images/FondoHome.png"
          alt="Fondo Home Catoexpress"
        />
        <div className="absolute inset-0 flex items-center ml-5  md:bottom-24 lg:bottom-24 ">
          <div className="text-white font-semibold sm:text-xl md:text-4xl lg:text-6xl z-10 flex flex-col gap-2 text-xl">
            <p className="flex">
              <span className="bg-amber-500 p-2">BIENVENIDO</span>
            </p>
            <p>A NUESTRO MUNDO VIRTUAL</p>
          </div>
        </div>
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
          <ProductView products={dataCeprobis} lugar="Ceprobis UCSM" />
        </div>
      </section>
    </main>
  );
}
