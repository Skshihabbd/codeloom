import { useEffect, useState } from "react";
import End_nav from "../shared component/End_nav";
import { DateRangePicker } from "react-date-range";
import Nav_start from "../shared component/Nav_start";
import { IoSearch } from "react-icons/io5";
import "animate.css";
import { CiCirclePlus } from "react-icons/ci";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { CiCircleMinus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { addDays } from "date-fns";

import { categories } from "../shared component/Category";
import Categories from "../shared component/Categories";
import { Link, useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const [isScrolled, setIsScrolled] = useState(false);
  const [bgRed, setBgRed] = useState(false);
  const [marzin, setMarzin] = useState(false);
  const [destination, setDestination] = useState(false);
  const [scrolls, setScrolls] = useState(false);
  const [position, setPosition] = useState(false);
  const [guest, setGuest] = useState(false);
  const [calenderday, setCalenderDay] = useState(false);
  const [calenderday1, setCalenderDay1] = useState(true);

  // guest state
  const [adult, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [adultChild, setAdultsChild] = useState(adult + children);
  const [infants, setInfants] = useState(0);
  const [pet, setPet] = useState(0);
  const [isCondition, setIsCondition] = useState(false);

  useEffect(() => {
    if ((infants > 0 || pet > 0) && !isCondition && adultChild === 0) {
      setAdults(1);
      setIsCondition(true);
    }
  }, [infants, pet, isCondition]);
  // guest state
  useEffect(() => {
    setAdultsChild(adult + children);
  }, [adult, children, infants, pet]);

  const handleGuest = () => {
    setGuest(!guest);
    setDestination(false);
    setCalenderDay(false);
  };
  const handleAllstateadult = () => {
    setAdultsChild(0);
    setAdults(0);
    setChildren(0);
    setPet(0);
    setInfants(0);
    setIsCondition(false);
  };

  const handleCalender = () => {
    setCalenderDay(!calenderday);
    setDestination(false);
    setGuest(false);
  };

  // react calender date

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSelectDate = (item) => {
    setState([item.selection]); // Update the DateRangePicker's state

    // Extract startDate and endDate, then update the new state
    const { startDate, endDate } = item.selection;
    setSelectedDates({
      startDate: startDate,
      endDate: endDate,
    });
  };

  const resetDates = () => {
    setSelectedDates({
      startDate: null,
      endDate: null,
    });

    setState([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
  };

  // react calender date

  const handleOnMouse = () => {
    setScrolls(true);
    // document.body.style.overflow = "";
  };
  // console.log(scrolls);
  const handleOnMouseRemove = () => {
    setScrolls(false);
    // document.body.style.overflow = "";
  };

  const handleDestination = () => {
    setDestination(!destination);
    setCalenderDay(false);
    setGuest(false);
  };
  const handleDestination1 = () => {
    // setDestination(false);
  };
  const handleSetBg = () => {
    setBgRed(true);
  };

  const handleRemoveBg = () => {
    setBgRed(false);
  };

  // handle marzin
  const handleMarzin = () => {
    setMarzin(!marzin);
  };

  console.log("pet", pet);
  console.log("adult", adultChild);
  console.log("infant", infants);
  // handle marzin
  // Function to handle scroll event
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1) {
      setIsScrolled(true);
      setDestination(false);
      setPosition(true);
      setCalenderDay(true);
      setGuest(true);
    } else {
      setIsScrolled(false);
      setPosition(false);
      setCalenderDay(false);
      setGuest(false);
    }
  };

  const handleChildDivClick = (e) => {
    e.stopPropagation();
    // setIsScrolled(false);
  };
  // console.log(isScrolled);

  // Use effect to attach the scroll event listener
  useEffect(() => {
    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null; // Clean up on component unmount
    };
  }, []);
  const [startDates, setFullStartDate] = useState("");
  const [endDates, setFullEndDate] = useState("");

  useEffect(() => {
    if (selectedDates.endDate) {
      setFullEndDate(
        selectedDates.endDate.toLocaleDateString("en-US", {
          month: "short", // Short month name (e.g., Oct)
          day: "numeric", // Numeric day (e.g., 8)
        })
      );
    } else {
      setFullEndDate(""); // Clear fullDate if endDate is not available
    }
  }, [selectedDates]);
  useEffect(() => {
    if (selectedDates.startDate) {
      setFullStartDate(
        selectedDates.startDate.toLocaleDateString("en-US", {
          month: "short", // Short month name (e.g., Oct)
          day: "numeric", // Numeric day (e.g., 8)
        })
      );
    } else {
      setFullStartDate(""); // Clear fullDate if endDate is not available
    }
  }, [selectedDates]);

  console.log(startDates, endDates);
  const today = new Date();

  return (
    <div className={`w-full relative   `}>
      <div className=" fixed top-0 left-0 z-20 w-full bg-white">
        <div
          className={`md:pt-4 md:pb-8   lg:py-9 flex mx-auto w-11/12 justify-between items-center flex-wrap `}
        >
          <div className="">
            <Nav_start />
          </div>

          {/* First Navbar */}
          <div className={``}>
            <div>
              <div
                className={`flex justify-center animate__animated animate__flipInX  ${
                  isScrolled ? "hidden" : ""
                }`}
              >
                <button className="mr-4 text-2xl">Stays</button>
                <button className="text-2xl">Experiences</button>
              </div>

              {/* Second Nav */}
              <div
                onClick={handleChildDivClick}
                className={` flex shadow-xl justify-center   py-2 items-center  bg-white border-[1px]  rounded-[30px]  md:gap-3 gap-0  text-lg ${
                  isScrolled ? "" : "hidden"
                }`}
              >
                <button
                  onClick={() => {
                    setDestination(true),
                      setCalenderDay(false),
                      setGuest(false);
                    setIsScrolled(false);
                  }}
                  className="pl-3 "
                >
                  <p>Anywhere</p>
                </button>
                <hr className="h-5  w-[1px] bg-black  " />
                <button
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(true),
                      setGuest(false);
                    setIsScrolled(false);
                  }}
                  className=" "
                >
                  AnyWhere
                </button>
                <hr className="h-5  w-[1px] bg-slate-900 " />
                <button
                  className="px-3"
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(false),
                      setGuest(true);
                    setIsScrolled(false);
                  }}
                >
                  <p> Add guests</p>
                </button>
                <button
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(false),
                      setGuest(true);
                    setIsScrolled(false);
                  }}
                  className="bg-red-600  p-2 rounded-full"
                >
                  <IoSearch className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <End_nav />
          </div>
        </div>
      </div>
      <div>
        {/* Second Navbar */}
        <div
          className={`bg-white  fixed w-full animate__animated animate__zoomIn   z-30 top-20 py-10 ${
            isScrolled ? "hidden " : ""
          } `}
        >
          <div
            className={` .divi ${
              bgRed ? "bg-[#DDDDDD]" : ""
            }    shadow-lg  h-16 border-2 md:w-[664px]  lg:w-[784px] mx-auto rounded-r-[30px] rounded-l-[30px]   `}
          >
            <button
              onClick={handleDestination}
              onFocus={handleSetBg}
              className="md:w-[220px]  lg:w-[260px] bordersks comon focus:bg-white focus:shadow-xl h-full hover:bg-[#EBEBEB]  hover:rounded-r-[30px] hover:rounded-l-[28px] focus:rounded-r-[30px] focus:rounded-l-[30px]"
            >
              <p className="text-left pl-10">Where</p>

              <input
                onFocus={(e) => ((e.target.value = ""), handleSetBg)}
                onBlur={handleRemoveBg}
                type="text"
                name=""
                id=""
                placeholder="Search destination"
                className={`outline-none ${bgRed ? "bg-[#DDDDDD]" : ""} input`}
              />
            </button>

            <button
              onClick={handleCalender}
              className="md:w-[110px] lg:w-[130px] bordersk h-full comon hover:bg-[#EBEBEB] hover:rounded-r-[30px] hover:rounded-l-[30px] "
            >
              <p>Check in</p>
              <p>
                {selectedDates.startDate !== null ? (
                  <div className="flex justify-around flex-row">
                    <p className="overflow-auto font-bold ">
                      {selectedDates.startDate
                        ? selectedDates.startDate.toLocaleDateString("en-US", {
                            month: "short", // Full month name (e.g., October)
                            day: "numeric", // Numeric day (e.g., 8)
                          })
                        : ""}
                    </p>
                    <button onClick={resetDates}>
                      <RxCross2 />
                    </button>
                  </div>
                ) : (
                  "Add date"
                )}
              </p>
            </button>
            <button
              onClick={handleCalender}
              className=" md:w-[110px] lg:w-[130px] comon borderthird h-full hover:bg-[#EBEBEB] hover:rounded-r-[30px] hover:rounded-l-[30px]"
            >
              <p>Check Out</p>
              <p>
                {selectedDates.endDate !== null ? (
                  <div className="flex justify-around flex-row">
                    <p className="overflow-auto font-bold ">
                      {selectedDates.endDate
                        ? selectedDates.endDate.toLocaleDateString("en-US", {
                            month: "short", // Full month name (e.g., October)
                            day: "numeric", // Numeric day (e.g., 8)
                          })
                        : ""}
                    </p>
                    <button onClick={resetDates}>
                      <RxCross2 />
                    </button>
                  </div>
                ) : (
                  "Add date"
                )}
              </p>
            </button>

            <button
              onClick={handleGuest}
              className="md:w-[220px]  lg:w-[260px] border2 h-full comon hover:bg-[#EBEBEB] hover:rounded-r-[28px] hover:rounded-l-[30px]"
            >
              <p className="text-left pl-2">
                Who <br />
                <span className="">
                  {adultChild !== 0 || pet !== 0 || infants !== 0 ? (
                    <>
                      <div className="flex">
                        <p className="flex overflow-hidden w-20">
                          {adultChild !== 0 && <p>adult{adultChild}</p>}
                          {pet !== 0 && <p>pet{pet}</p>}
                          {infants !== 0 && <p>infants{infants}</p>}
                        </p>
                        <button
                          onFocus={() => setGuest(false)}
                          onClick={handleAllstateadult}
                          className="ml-2 hover:bg-red-400 rounded-full p-1"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    </>
                  ) : (
                    <p>Add guest</p>
                  )}
                </span>
              </p>
            </button>
            <button
              onMouseEnter={handleSetBg}
              onMouseLeave={handleRemoveBg}
              className="bg-red-500  rounded-full texts p-3 md:bottom-[52px] md:right-24 absolute lg:top-[52px] lg:right-80 "
            >
              <IoSearch className="  text-white      " />
            </button>
          </div>

          {/* search div bar mega menu */}
          <div
            onMouseEnter={handleOnMouse}
            onMouseLeave={handleOnMouseRemove}
            className={` ${marzin ? "h-96" : "h-72"} ${
              destination ? "" : "hidden"
            }  bg-white md:w-[320px] lg:w-[390px]   border-b-2 shadow-2xl md:left-16 lg:left-72 z-50 rounded-xl absolute  h-96`}
          >
            <div className="overflow-y-auto scroll-bar md:w-[315px]  lg:w-[385px] h-full">
              <p className="px-5  ">
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, "There is no one who loves
                pain itself, who seeks after it and wants to have it, simply
                because it is pain..." What is Lorem Ipsum? Lorem Ipsum is
                simply dummy text of specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, "There is no one who loves
                pain itself, who seeks after it and wants to have it, simply
                because it is pain..." What is Lorem Ipsum? Lorem Ipsum is
                simply dummy text of specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, "There is no one who loves
                pain itself, who seeks after it and wants to have it, simply
                because it is pain..." What is Lorem Ipsum? Lorem Ipsum is
                simply dummy text of specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, "There is no one who loves
                pain itself, who seeks after it and wants to have it, simply
                because it is pain..." What is Lorem Ipsum? Lorem Ipsum is
                simply dummy text of specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, "There is no one who loves
                pain itself, who seeks after it and wants to have it, simply
                because it is pain..." What is Lorem Ipsum? Lorem Ipsum is
                simply dummy text of specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..." What is Lorem
                Ipsum? Lorem Ipsum is simply dummy text of
              </p>
            </div>
          </div>
          {/* search div bar mega menu */}

          {/* date calender menu */}
          <div
            className={`mt-4 w-[760px] h-96 rounded-2xl bg-white absolute left-[300px]   ${
              calenderday ? "" : "hidden"
            } ${calenderday1 ? "" : "hidden"} `}
          >
            <div className="overflow-y-auto scroll-bar w-[730px] px-4  h-[350px]">
              <div className="  ">
                <DateRangePicker
                  onChange={handleSelectDate}
                  ranges={state}
                  months={2}
                  direction="horizontal"
                  minDate={today}
                />
                ;
              </div>
            </div>
          </div>
          {/* date calender menu */}
          {/* who is guest children father */}
          <div
            className={`mt-4 ${
              guest ? "" : "hidden"
            }  lg:w-[390px] h-96 absolute right-72 rounded-2xl  bg-white`}
          >
            {/* child parent div  */}
            <div className="overflow-y-auto scroll-bar w-[370px] h-[360px] ">
              <div className="flex flex-col   mt-10 mx-6 justify-between gap-10 ">
                {/* 1st div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Adults</p>
                    <p className="text-gray-400">Age 13 or above</p>
                  </div>

                  <div className="flex justify-center items-center gap-2 ">
                    <button
                      disabled={adult === 0}
                      onClick={() => setAdults(adult - 1)}
                      className="text-2xl "
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl  w-6">{adult}</p>
                    <button
                      disabled={adult === 16 || adultChild === 16}
                      onClick={() => setAdults(adult + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 2nd div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Children</p>
                    <p className="text-gray-400">Ages 2 – 12</p>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={children === 0}
                      onClick={() => setChildren(children - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl w-6">{children}</p>
                    <button
                      disabled={children === 13 || adultChild === 16}
                      onClick={() => setChildren(children + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 3rd div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Infants</p>
                    <p className="text-gray-400">Under 2</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={infants === 0}
                      onClick={() => setInfants(infants - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl">{infants}</p>
                    <button
                      disabled={infants === 5}
                      onClick={() => setInfants(infants + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 4th div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Pets</p>
                    <Link className="text-gray-400 border-b-[1px] border-gray-400">
                      Bringing a service animal?
                    </Link>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={pet === 0}
                      onClick={() => setPet(pet - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl">{pet}</p>
                    <button
                      disabled={pet === 5}
                      onClick={() => setPet(pet + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                {/* 4th div end */}
              </div>
            </div>
            {/* child parent divend  */}
          </div>
          {/* who is guest children father */}
        </div>
        {/* Second Navbar */}
      </div>
      {/* category */}
      <div
        className={`w-full fixed z-20  bg-white h-32 py-6 ${
          position ? " md:top-24 lg:top-28" : "top-60"
        }`}
      >
        <hr className="h-[1px] w-full bg-black" />
        <div className="  ">
          <Categories categories={categories}></Categories>
        </div>
      </div>
      {/* category */}
      <div className=" bg-red-500 relative top-96  ">
        <p>shihab</p>
        <h1>
          "There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..." What is Lorem Ipsum? Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Why do we use it? It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like). Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Where can I get
          some? There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. 5
          paragraphs words bytes lists Start with 'Lorem ipsum dolor sit
          amet...' Donate: If you use this site regularly and would like to help
          keep the site on the Internet, please consider donating a small sum to
          help pay for the hosting and bandwidth bill. There is no minimum
          donation, any sum is appreciated - click here to donate using PayPal.
          Thank you for your support. Donate bitcoin:
          16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF Translations: Can you help
          translate this site into a foreign language ? Please email us with
          details if you can help. There is a set of mock banners available here
          in three colours and in a range of standard banner sizes:
          BannersBannersBanners NodeJS Python Interface GTK Lipsum Rails .NET
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat." 1914 translation by H. Rackham "On the other hand, we
          denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire, that they cannot foresee the pain and trouble that
          are bound to ensue; and equal blame belongs to those who fail in their
          duty through weakness of will, which is the same as saying through
          shrinking from toil and pain. These cases are perfectly simple and
          easy to distinguish. In a free hour, when our power of choice is
          untrammelled and when nothing prevents our being able to do what we
          like best, every pleasure is to be welcomed and every pain avoided.
          But in certain circumstances and owing to the claims of duty or the
          obligations of business it will frequently occur that pleasures have
          to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains." help@lipsum.com Privacy Policy ·
        </h1>
        <div className="bg-blue-700">
          <p onMouseEnter={handleSetBg}>shihab</p>
          <h1>
            "There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain..." What is Lorem Ipsum? Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham. Where can I get some? There are
            many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If
            you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc. 5 paragraphs words bytes lists Start with 'Lorem ipsum
            dolor sit amet...' Donate: If you use this site regularly and would
            like to help keep the site on the Internet, please consider donating
            a small sum to help pay for the hosting and bandwidth bill. There is
            no minimum donation, any sum is appreciated - click here to donate
            using PayPal. Thank you for your support. Donate bitcoin:
            16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF Translations: Can you help
            translate this site into a foreign language ? Please email us with
            details if you can help. There is a set of mock banners available
            here in three colours and in a range of standard banner sizes:
            BannersBannersBanners NodeJS Python Interface GTK Lipsum Rails .NET
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." Section 1.10.32 of "de
            Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?" 1914 translation by H. Rackham "But I must explain to you
            how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." 1914 translation by H. Rackham "On the other
            hand, we denounce with righteous indignation and dislike men who are
            so beguiled and demoralized by the charms of pleasure of the moment,
            so blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains." help@lipsum.com
            Privacy Policy ·
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
