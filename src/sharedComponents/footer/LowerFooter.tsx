import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const LowerFooter = () => {
  const colTwoData = ["News", "Tournaments", "Courses", "E-Books"];
  const colThreeData = ["Privacy policies", "Terms & Conditions", "Contact Us"];

  return (
    <div className="grid items-center justify-between grid-cols-3 pt-8">
      <div className="flex flex-col h-full text-sm text-white">
        <p className="leading-[1.1]">
          Lorem Ipsum is simply dummy text of the printing and typesett ing
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <p className="">Follow us on</p>
        <div className="flex gap-4 pt-5">
          <div className="bg-[#d35d31] rounded-full p-2">
            <BsTwitter className="text-[#131313] text-2xl" />
          </div>
          <div className="bg-[#d35d31] rounded-full p-2">
            <AiFillLinkedin className="text-[#131313] text-2xl" />
          </div>
          <div className="bg-[#d35d31] rounded-full p-2">
            <BsInstagram className="text-[#131313] text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {colTwoData.map((item, index) => {
          return (
            <Link key={index} to="#" className="px-4 py-3 text-base text-white">
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col h-full">
        {colThreeData.map((item, index) => {
          return (
            <Link key={index} to="#" className="px-4 py-3 text-base text-white">
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LowerFooter;
