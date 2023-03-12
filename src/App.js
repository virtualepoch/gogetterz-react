import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";

const pageContainer = {
  maxWidth: "1200px",
  height: "200vh",
  margin: "0 auto",
  padding: "20px 10px",
  boxShadow: "inset 0 0 20px gray",
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <section style={{ ...pageContainer }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
