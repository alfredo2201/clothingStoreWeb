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

function App() {
  return (

    <div>
      <NavBar />
      <ClientContextProvider>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="add-item" element={<AddItem/>}/>
        <Route path="auth/login" element={<Login />} />
        <Route path="singleShop" element={<SingleShop />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      </ClientContextProvider>
      <Footer/>
    </div >
  )
}

export default App
