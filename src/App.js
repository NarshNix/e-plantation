import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
