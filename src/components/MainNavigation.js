import { NavLink } from "react-router-dom";

export default function MainNavigation() {
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
      </div>
    </nav>
  );
}
