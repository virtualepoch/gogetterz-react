import { CartProvider } from "./CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderNavMenuCart } from "./components/HeaderNavMenuCart";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const pageContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px 10px",
};

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <HeaderNavMenuCart />
          <section style={{ ...pageContainer }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </section>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
