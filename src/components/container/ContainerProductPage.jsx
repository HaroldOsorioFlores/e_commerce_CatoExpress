const { default: Product } = require("../common/Product/Product");

const ContainerProductPage = ({ fetchData }) => {
  return (
    <section className="flex flex-col gap-7 max-w-7xl ">
      <h2>Productos</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {fetchData.map((item, index) => (
          <Product
            key={index}
            nombre={item.title}
            imagen={item.urlImage}
            lugar="El Cholo"
            dinero={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ContainerProductPage;
