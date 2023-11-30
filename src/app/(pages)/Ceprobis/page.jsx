import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataCeprobis } from "@/utils/fetchData";
import Banner from "@/components/common/banner/Banner";

const Ceprobis = async () => {
  const dataCeprobis = await getDataCeprobis();
  return (
    <section className="flex flex-col items-center gap-8 mb-10">
      <section className="">
        <Banner name={"CEPROBIS"} img_src={"/images/banner_ceprobis.png"}/>
      </section>
      <ContainerProductPage fetchData={dataCeprobis} place="Ceprobis UCSM"/>
    </section>
  );
};

export default Ceprobis;
