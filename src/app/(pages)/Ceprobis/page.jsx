import ContainerProductPage from "@/components/container/containerProductPage";
import Banner from "@/components/common/Banner/Banner";
import { getDataCeprobis } from "@/utils/fetchData";

const Ceprobis = async () => {
  const dataCeprobis = await getDataCeprobis();
  console.log("La data de ceprobis es: ", dataCeprobis);
  return (
    <div>
      <Banner />
      <section className="flex flex-col items-center my-10 mx-10 gap-8">
        <section className="">
          <h1>Ceprobis</h1>
        </section>
        <ContainerProductPage fetchData={dataCeprobis} />
      </section>
    </div>
  );
};

export default Ceprobis;
