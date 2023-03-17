import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { BtnToTop } from "./components/BtnToTop";
import { CartProvider } from "./CartContext";
import { HeaderNavMenuCart } from "./components/HeaderNavMenuCart";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./pages/home.css";
import "./pages/about-contact.css";
import { Footer } from "./components/Footer";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();

  const pageContainer = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 10px",
  };

  return (
    <>
      <BtnToTop />
      <CartProvider>
        <HeaderNavMenuCart />
        <section style={{ ...pageContainer }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </section>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
