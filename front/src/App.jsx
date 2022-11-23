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

function App() {
  return (

    <div >
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </div >
  )
}

export default App
