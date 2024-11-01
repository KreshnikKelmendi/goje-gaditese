
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from './Components/Pages/MenuPage';
import GalleryPage from './Components/Pages/GalleryPage';
import ProductsPage from './Components/Pages/ProductsPage';
import AboutUsPage from './Components/Pages/AboutUsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kush-jemi" element={<AboutUsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/produktet" element={<ProductsPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
