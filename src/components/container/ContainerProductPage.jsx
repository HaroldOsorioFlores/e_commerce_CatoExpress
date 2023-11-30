import Product from "../common/Product/Product";
const ContainerProductPage = ({ fetchData, place }) => {
  return (
    <section className="flex flex-col gap-7 max-w-7xl ">
      <h2>Productos</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {fetchData.map((item, index) => (
          <Product
            key={index}
            nombre={item.title}
            imagen={item.urlImage}
            lugar={place}
            dinero={item.price}
            id={item._id}
          />
        ))}
      </div>
    </section>
  );
};

export default ContainerProductPage;
