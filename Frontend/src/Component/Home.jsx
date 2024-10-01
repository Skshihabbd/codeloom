import { useEffect, useState } from "react";
import End_nav from "../shared component/End_nav";
import Icon_navbar from "../shared component/Icon_navbar";
import Nav_start from "../shared component/Nav_start";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleDivClick = () => {
    setIsScrolled(true);
  };
  const handleChildDivClick = (e) => {
    e.stopPropagation();
    setIsScrolled(false);
  };
  // Use effect to attach the scroll event listener
  useEffect(() => {
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null; // Clean up on component unmount
    };
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-4 h-[5200px]">
      <div className="fixed flex justify-between flex-wrap  z-40 w-11/12 ">
        <div>
          <Nav_start></Nav_start>
        </div>
        <div className={`${isScrolled ? "w-4/12" : "w-8/12"}`}>
          <Icon_navbar
            isScrolled={isScrolled}
            handleChildDivClick={handleChildDivClick}
            handleDivClick={handleDivClick}
          ></Icon_navbar>
        </div>
        <div>
          <End_nav></End_nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
