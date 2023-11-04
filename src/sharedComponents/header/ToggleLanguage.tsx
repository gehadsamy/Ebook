import React, { FC } from "react";
import { ToggleLanguageProps } from "./interfaces";
import { useTranslation } from "react-i18next";

const ToggleLanguage: FC<ToggleLanguageProps> = ({ changeLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-end w-full py-2 border-b-[1px] border-gray-500 border-opacity-[.7]">
      <button
        className="text-base text-white bg-transparent px-7"
        onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
      >
        العربيه
      </button>
    </div>
  );
};

export default ToggleLanguage;
