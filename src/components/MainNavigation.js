import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./mainnavigation.css";

export default function MainNavigation() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navigation">
      {/* Left Section */}
      <div className="nav-left">
        <NavLink to="/" className="nav-link">
          <i className="fa-solid fa-leaf"></i> Home
        </NavLink>
      </div>

      {/* Middle Section */}
      <div className="nav-mid">
        <h4>E-Plantation</h4>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <NavLink to="/product" className="nav-link">
          Products
        </NavLink>
        <div className="cart-item">
          <NavLink to="/cart" className="nav-link">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <span>{cart.length}</span> {/* Cart badge */}
        </div>
      </div>
    </nav>
  );
}
