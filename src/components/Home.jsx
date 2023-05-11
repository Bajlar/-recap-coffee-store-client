import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { useState } from "react";

const Home = () => {
  const coffees = useLoaderData();
  const [allProducts, setAllProducts] = useState(coffees);
  // console.log(coffees);

  return (
    <div>
      <h2>This is a home</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
      dignissimos cupiditate voluptates explicabo ullam perspiciatis corrupti
      beatae eveniet, aut expedita doloremque non aspernatur provident facilis.
      Sunt sit quaerat totam obcaecati ab et omnis autem corrupti facilis sed
      delectus debitis, quisquam doloribus rem adipisci. Quae et repellendus,
      nesciunt facere rerum quod.
      <div className="mt-7">
        <div className="text-center">
          <p>--- Sip & Savor ---</p>
          <h2 className="text-3xl font-medium text-center text-purple-600">
            Our Popular Products
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {allProducts.map((product) => (
            <Products
              key={product._id}
              product={product}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            ></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;