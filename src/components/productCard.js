import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/productContext";

function ProductCard({ stadion, isOnCartPage }) {
  const { setCartStadions, cartStadions } = useContext(ProductContext);

  const onAddCart = () => {
    if (cartStadions.some((e) => e.id === stadion.id)) {
      return;
    }
    let newArray = [...cartStadions];
    newArray.push(stadion);
    setCartStadions(newArray);
  };

  return (
    <div className="max-w-sm hover:shadow-lg shadow-slate-700 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform hover:scale-103 ">
      <div className="p-4 ">
        <img
          className=" aspect-4/3  rounded-sm  "
          src={stadion.imageURL}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5 flex justify-between">
        <a href="#">
          <h3 className="text-2xl  inline-block   font-bold tracking-tight text-gray-900 dark:text-white">
            {stadion.title}
          </h3>
        </a>
        <Rate defaultValue={stadion.reyting} disabled={true} allowHalf={true} />
      </div>

      <div className="grid grid-cols-3 gap-2 px-4 py-2 ">
        <div className="flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 opacity-50 hover:opacity-100  rounded-lg text-sm p-4  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <button onClick={onAddCart} className="font-bold">
            Buy
          </button>
        </div>
        <span className="text-xl flex items-center justify-center  font-bold text-gray-900 dark:text-white">
          {`$${stadion.price}`}
        </span>

        <Link to={`/stadium/${stadion.id}`}>
          <div className="flex  text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 opacity-50 hover:opacity-100  rounded-lg text-sm p-4  py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <img
              className="w-6 h-6 text-white"
              src="https://www.svgrepo.com/show/22172/settings.svg"
            />
            <button className="font-bold">Detail</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
