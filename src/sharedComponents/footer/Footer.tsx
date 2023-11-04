import React from "react";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";
import CopyWriting from "./CopyWriting";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#131313] px-12">
        <UpperFooter />
        <LowerFooter />
      </div>

      <CopyWriting />
    </div>
  );
};

export default Footer;
