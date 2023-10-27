import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataCeprobis } from "@/utils/fetchData";

const Ceprobis = async () => {
  const dataCeprobis = await getDataCeprobis();
  console.log("La data de ceprobis es: ",dataCeprobis)
  return (
    <section className="flex flex-col items-center my-10 mx-10 gap-8">
      <section className="">
        <h1>Ceprobis</h1>
      </section>
      <ContainerProductPage fetchData={dataCeprobis} />
    </section>
  );
};

export default Ceprobis;
