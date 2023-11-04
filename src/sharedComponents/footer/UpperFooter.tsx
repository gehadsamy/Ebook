import React from "react";
import { Link } from "react-router-dom";
import eBookLogo from "../../assets/eBook.svg";

const UpperFooter = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between pt-32 pb-8 border-b-[1px] border-gray-600 border-opacity-[.7]">
      <Link to="/">
        <img
          className="object-cover w-32 h-32"
          src={eBookLogo}
          alt="eBook Logo"
        />
      </Link>

      <p className="text-xl font-bold">
        <span className="text-[#696767]">Join our</span> <br />
        <span className="text-white">Newsetter</span>
      </p>
      <div className="flex w-full">
        <input
          placeholder="What your are Looking for?"
          type="text"
          className=" px-4 py-2 w-full bg-transparent m-0 border-[1px] border-gray-600 border-opacity-[.7]"
          value=""
        ></input>
        <button className="font-bold text-black bg-[#d35d31] px-4 py-2">
          Subscrible
        </button>
      </div>
    </div>
  );
};

export default UpperFooter;
