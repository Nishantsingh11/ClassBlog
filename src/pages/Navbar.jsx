import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto  bg-blue-500 shadow-lg shadow-black h-20 ">
      <div className="flex justify-center flex-row">
        <ul className="flex mt-5">
          <li>
            <Link to="/" className="text-white mr-6 text-xl font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white mr-6 text-xl font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/artical" className="text-white mr-6 text-xl font-bold">
              Artical
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
