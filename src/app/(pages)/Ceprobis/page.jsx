import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataCeprobis } from "@/utils/fetchData";
import Banner from "@/components/common/banner/Banner";

const Ceprobis = async () => {
  const dataCeprobis = await getDataCeprobis();
  console.log("La data de ceprobis es: ",dataCeprobis)
  return (
    <section className="flex flex-col items-center gap-8">
      <section className="">
        <Banner name={"CEPROBIS"} img_src={"/images/banner_ceprobis.png"}/>
      </section>
      <ContainerProductPage fetchData={dataCeprobis} />
    </section>
  );
};

export default Ceprobis;
