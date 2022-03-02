import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [cartStadions, setCartStadions] = useState([]);

  const myValue = { cartStadions, setCartStadions };

  return (
    <ProductContext.Provider value={myValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
