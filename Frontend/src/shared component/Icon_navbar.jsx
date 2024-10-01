import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Search_modal from "./Search_modal";

const Icon_navbar = ({ isScrolled, handleChildDivClick, handleDivClick }) => {
  const [onset, setOnfocus] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const handleFocus = () => {
    setOnfocus(true);
    console.log("shihab");
    console.log(onset);
  };
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div onClick={handleDivClick} className="">
      <div className={`${isScrolled ? "hidden" : ""} text-center`}>
        <button className="mr-4 text-2xl">Stays</button>
        <button className="text-2xl">Experiences</button>
      </div>
      {/* 2nd nav big */}
      <div
        onClick={handleChildDivClick}
        className={`flex justify-between items-center color   shadow-lg    ${
          isScrolled
            ? " py-2 px-2  ease-in duration-500"
            : " mt-20   ease-in duration-200"
        }`}
      >
        <button
          onClick={handleClick}
          className="flex  w-full   flex-col justify-end"
        >
          {isScrolled ? (
            <>
              <span>Anywhere</span>
            </>
          ) : (
            <>
              <button
                className={`flex pl-2  flex-col  ${
                  onset ? "bg-white " : ""
                }  hover:bg-[#EBEBEB] focus:bg-white focus:shadow-lg  rounded-[30px] w-full py-2`}
              >
                <label>Where</label>
                <input
                  type="search"
                  placeholder="Search destinations"
                  className={`outline-0 rounded-[20px]   pl-2 hover:bg-[#EBEBEB]`}
                  name="location"
                />
              </button>
            </>
          )}
        </button>
        <hr className="w-1 h-10 bg-[#dbd5d5] " />
        <button className="w-full   ">
          {isScrolled ? (
            <>
              <span>Week</span>
            </>
          ) : (
            <>
              <div className="flex justify-around">
                <button className="w-full hover:bg-[#EBEBEB] focus:bg-white focus:shadow-lg rounded-[30px] py-2">
                  <span>Check in</span>
                  <br />
                  <span>Add dates</span>
                </button>

                <button className="w-full hover:bg-[#EBEBEB] focus:bg-white focus:shadow-lg rounded-[30px] py-2">
                  <span>Check in</span>
                  <br />
                  <span>Add dates</span>
                </button>
              </div>
            </>
          )}
        </button>

        <hr className="w-1 h-10 bg-[#dbd5d5]" />

        <button className="w-full  ">
          {isScrolled ? (
            <>
              <button className="flex justify-between w-full items-center">
                <span>Add guest</span>
                <button className="bg-red-500 rounded-full p-2 py-1 hover:shadow-xl">
                  <IoMdSearch />
                </button>
              </button>
            </>
          ) : (
            <>
              <button className="flex  w-full focus:bg-white focus:shadow-lg justify-between hover:bg-[#EBEBEB] rounded-[30px] py-2 ">
                <div>
                  <span>Who</span>
                  <br />
                  <span>Add guests</span>
                </div>
                <button className=" bg-red-500 rounded-full  p-2 py-1 hover:shadow-xl ">
                  <IoMdSearch className="text-white  text-2xl" />
                </button>
              </button>
            </>
          )}
        </button>
      </div>
      <div className="bg-black">
        <Search_modal isOpen={isOpen}></Search_modal>
      </div>
    </div>
  );
};

export default Icon_navbar;
