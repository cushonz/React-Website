import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:productID" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
