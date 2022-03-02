import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import StadiumDetail from "./pages/StadiumDetail/StadiumDetail";
import StadiumCreate from "./pages/StadiumCreate";
import StadiumUpdate from "./pages/StadiumUpdate/StadiumUpdate";
import CartPage from "./pages/Cart";
import ProductProvider from "./utils/productContext";
import User from "./pages/User";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/stadium/:id" element={<StadiumDetail />} />
          <Route path="/stadium/update/:id" element={<StadiumUpdate />} />
          <Route path="/stadium/create" element={<StadiumCreate />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
