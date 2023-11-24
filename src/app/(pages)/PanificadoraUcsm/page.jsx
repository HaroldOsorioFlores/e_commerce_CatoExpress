import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataPanificadora } from "@/utils/fetchData";
import Banner from "@/components/common/banner/Banner";

const PanificadoraUcsm = async () => {
  const dataPanificadora = await getDataPanificadora();

  return (
    <section className="flex flex-col items-center gap-8">
      <section className="">
        <Banner name={"PANIFICADORA"} img_src={"/images/banner_panificadora.png"}/>
      </section>
      <ContainerProductPage fetchData={dataPanificadora} />
    </section>
  );
};

export default PanificadoraUcsm;
