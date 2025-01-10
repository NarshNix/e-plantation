import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
