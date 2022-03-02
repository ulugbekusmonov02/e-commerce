import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import ProductCard from "../../components/productCard";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="flex justify-between my-8 ">
          <h1 className="text-xl md:text-4xl text-gray-700  ">
            
          </h1>
          <Link
            className="bg-gray-700 px-6 py-2 rounded-lg text-teal-100 text-xl"
            to={"/stadium/create"}
          >
            Add
          </Link>
        </div>
        <div className=" justify-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 p-4 gap-10 ">
          {data.map((stadion) => {
            return <ProductCard key={stadion.id} stadion={stadion} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
