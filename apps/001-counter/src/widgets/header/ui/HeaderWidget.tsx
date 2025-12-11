import { NavLink } from "react-router-dom";

export const HeaderWidget = () => {
  return (
    <>
      <header>
        <h3>Apps:</h3>
        <nav>
          <ul>
            <li><NavLink to="/counter">Counter</NavLink></li>
            <li><NavLink to="/timer">Timer</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/window">Window</NavLink></li>
            <li><NavLink to="/toggle">Toggle</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}