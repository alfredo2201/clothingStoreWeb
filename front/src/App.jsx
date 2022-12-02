import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { ClientContextProvider } from './context/client/ClientProvider'
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import SingleShop from "./components/ShopSingle/ShopSingle";
import AddItem from "./pages/AddItem";
import Perfil from "./pages/perfil";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";
import OrdersAdmin from "./pages/OrdersAdmin";
import ProductAdmin from "./components/ListProducts/ProductosAdmin/ProductAdmin";

function App() {  
  return (
    <div>           
      <ClientContextProvider>
      <NavBar/> 
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="add-item" element={<AddItem/>}/>
        <Route path="perfil" element={<Perfil/>}/>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="singleShop" element={<SingleShop />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="orders" element={<OrdersAdmin />} />
        <Route path="products" element={<ProductAdmin />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      </ClientContextProvider>
      <Footer/>
    </div >
  )
}

export default App
