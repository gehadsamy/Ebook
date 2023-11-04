import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const navBarData = ["Home", "Courses", "E-books", "Contact", "Us"];
  return (
    <div className="bg-[#1e1e1e] py-2  px-12 flex justify-between">
      <div>
        {navBarData.map((item, index) => {
          return (
            <Link key={index} to="#" className="px-4 text-base text-white">
              {item}
            </Link>
          );
        })}
      </div>
      <button className="flex items-center text-white">
        <AiOutlineShoppingCart style={{ color: "white", fontSize: "2em" }} />
        <p className="pl-2 text-base"> Add to Cart</p>
      </button>
    </div>
  );
};

export default NavBar;
