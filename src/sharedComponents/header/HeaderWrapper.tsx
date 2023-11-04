import React from "react";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";
import HeaderLogo from "./HeaderLogo";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router-dom";

const HeaderWrapper = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    window.history.pushState({}, "", `/${lng}`);
  };
  const isAuth: boolean = false;
  return (
    <div className="w-full">
      <ToggleLanguage changeLanguage={changeLanguage} />
      <div className="flex items-center justify-between px-12 py-2">
        <HeaderLogo />
        {isAuth ? (
          <HeaderProfile />
        ) : (
          <Link className="text-white" to="/login">
            Sign In or Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderWrapper;
