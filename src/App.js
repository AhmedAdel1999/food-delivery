import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import FoodsPage from "./pages/foodsPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import NotFoundPage from "./pages/notFoundPage";
import SingleProductPage from "./pages/singleProductPage";

import "./App.css"









function App() {
  return (
    <div className="App flex flex-col h-screen">
      <BrowserRouter>
         <Navbar />
         <div className="bg-bgColor basis-full">
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/foods" element={<FoodsPage />} />
                <Route path="/foods/:id" element={<SingleProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage  />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
