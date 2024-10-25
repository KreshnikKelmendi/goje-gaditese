
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from './Components/Pages/MenuPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
