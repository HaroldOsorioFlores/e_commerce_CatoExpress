import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataPanificadora } from "@/utils/fetchData";

const PanificadoraUcsm = async () => {
  const dataPanificadora = await getDataPanificadora();

  return (
    <section className="flex flex-col items-center my-10 mx-10 gap-8">
      <section className="">
        <h1>Panificadora UCSM</h1>
      </section>
      <ContainerProductPage fetchData={dataPanificadora} />
    </section>
  );
};

export default PanificadoraUcsm;
