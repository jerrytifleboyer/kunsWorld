import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { Dropdown } from "./Cart/Dropdown";

export function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

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
        <div className="w-1/4 flex items-center justify-end">
          <Link to="/aboutme" className="font-bold hover:underline">
            About Me
          </Link>
          <Link to="/merch" className="px-8 font-bold hover:underline">
            Merch
          </Link>
          <Link to="/suggestions" className="font-bold hover:underline">
            Suggestions
          </Link>
          <button className="font-bold pl-8" onClick={handleDropdown}>
            Cart
          </button>
        </div>
        {dropdown && <Dropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
