import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { Dropdown } from "./Cart/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "../store/cart/cartSelector";
import { setIsCartOpen } from "../store/cart/cartAction";
export function Navbar() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Fragment>
      <div className="flex justify-between px-4 h-12 mb-4">
        <Link to="/">
          <img
            src="images/martini.svg"
            alt="home-button-martini"
            className="w-12 h-12"
          />
        </Link>
        <div className="w-1/2 flex items-center justify-end">
          <Link to="/aboutme" className="font-bold hover:underline">
            About Me
          </Link>
          <Link to="/merch" className="px-8 font-bold hover:underline">
            Merch
          </Link>
          <Link to="/suggestions" className="font-bold hover:underline">
            Suggestions
          </Link>
          <button className="font-bold pl-8" onClick={toggleCartOpen}>
            Cart
          </button>
        </div>
        {isCartOpen && <Dropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
