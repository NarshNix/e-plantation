import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./mainnavigation.css";

export default function MainNavigation() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navigation">
      <div className="nav-right">
        <NavLink to="/">
          <i class="fa-solid fa-leaf"></i>
        </NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-mid">
        <h4>E-Plantation</h4>
      </div>
      <div className="nav-left">
        <NavLink to="/product">Products</NavLink>

        <div className="cart-item">
          <NavLink to="/cart">
            <i class="fa-solid fa-cart-shopping logo"></i>
            <span>{cart.length > 0 && cart.length}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
