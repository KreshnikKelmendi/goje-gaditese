import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "./Components/Pages/MenuPage";
import GalleryPage from "./Components/Pages/GalleryPage";
import ProductsPage from "./Components/Pages/ProductsPage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import SinglePageOfProduct from "./Components/Pages/SinglePageOfProduct";
import ContactPage from "./Components/Pages/ContactPage";
import ScrollToTopButton from "./Components/Pages/ScrollToTopButtin";
import LogoLoading from "./Components/LogoLoading/LogoLoading";


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete ? (
        <LogoLoading onComplete={() => setLoadingComplete(true)} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kush-jemi" element={<AboutUsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/produktet" element={<ProductsPage />} />
            <Route path="/produktet/:productID" element={<SinglePageOfProduct />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
