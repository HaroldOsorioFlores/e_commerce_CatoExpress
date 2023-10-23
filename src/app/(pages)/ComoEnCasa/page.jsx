import ContainerProductPage from "@/components/container/containerProductPage";
import { getDataComoEnCasa } from "@/utils/fetchData";

const ComoEnCasa = async () => {
  const dataComoEnCasa = await getDataComoEnCasa();

  return (
    <section className="flex flex-col items-center my-10 mx-10 gap-8">
      <section className="">
        <h1>Como en Casa</h1>
      </section>
      <ContainerProductPage fetchData={dataComoEnCasa} />
    </section>
  );
};

export default ComoEnCasa;
