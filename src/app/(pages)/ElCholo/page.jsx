import Product from "@/components/common/Product/Product";
import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataCholo } from "@/utils/fetchData";
import Banner from "@/components/common/banner/Banner";

const ElCholo = async () => {
  const dataCholo = await getDataCholo();

  return (
    <section className="flex flex-col items-center gap-8">
      <section className="">
        <Banner name={"EL CHOLO"} img_src={"/images/banner_elcholo.png"}/>
      </section>
      <ContainerProductPage fetchData={dataCholo} />
    </section>
  );
};

export default ElCholo;
