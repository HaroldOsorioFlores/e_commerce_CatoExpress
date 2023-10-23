import Product from "@/components/common/Product/Product";
import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataCholo } from "@/utils/fetchData";

const ElCholo = async () => {
  const dataCholo = await getDataCholo();

  return (
    <section className="flex flex-col items-center my-10 mx-10 gap-8">
      <section className="">
        <h1>El Cholo</h1>
      </section>
      <ContainerProductPage fetchData={dataCholo} />
    </section>
  );
};

export default ElCholo;
