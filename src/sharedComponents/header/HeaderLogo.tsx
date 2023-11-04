import React from "react";
import eBookLogo from "../../assets/eBook.svg";
import { Link } from "react-router-dom";
const HeaderLogo = () => {
  return (
    <div className="flex">
        <Link to="/">
          <img
            className="object-cover w-28 h-28"
            src={eBookLogo}
            alt="eBook Logo"
          />
        </Link>
    </div>
  );
};

export default HeaderLogo;
