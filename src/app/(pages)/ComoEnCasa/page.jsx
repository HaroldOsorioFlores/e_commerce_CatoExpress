import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataComoEnCasa } from "@/utils/fetchData";
import Banner from "@/components/common/banner/Banner";

const ComoEnCasa = async () => {
  const dataComoEnCasa = await getDataComoEnCasa();

  return (
    <section className="flex flex-col items-center gap-8 mb-10">
      <section className="">
        <Banner name={"COMO EN CASA"} img_src={"/images/banner_comoencasa.png"}/>
      </section>
      <ContainerProductPage fetchData={dataComoEnCasa} place="Como en Casa UCSM"/>
    </section>
  );
};

export default ComoEnCasa;
