// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart"; // Import Cart component

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
