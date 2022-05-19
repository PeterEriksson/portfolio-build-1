import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/navigation.module.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import mobileStyles from "../styles/navMobile-effects.module.css";

function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const [slideClose, setSlideClose] = useState(false);
  const [linkActive, setLinkActive] = useState("");

  const handleSetActive = (to) => {
    setLinkActive(to);
    /*  console.log(linkActive); */
  };

  /* Look for :hover::after solution instead */
  const handleMenuClose = () => {
    setMenuActive(false);
    setSlideClose(true);
  };

  const handleMenuOpen = () => {
    setMenuActive(true);
    setSlideClose(false);
  };

  return (
    <div
      className="fixed top-0 w-screen z-40"
      style={{ background: "#091c29" }}
    >
      <div className="flex items-center  text-white justify-between  w-10/12 mx-auto    py-3 flex-col sm:flex-row  sm:flex">
        {/* LEFT section */}
        <div className="flex justify-between items-center //bg-red-500 w-full">
          <ScrollLink
            to="header"
            smooth="true"
            activeClass={styles._active}
            spy={true}
            offset={-40}
            onSetActive={handleSetActive}
            /* for some space between link and border -> */
            /* className="pb-1" */
            /* avoid navbar changing height -> have an "invinsible" bottom border -> */
            className={`border-b-2 border-mainDarkBlue ${
              linkActive !== "header" && styles.hoverAnimation
            } `}
          >
            <h1
              className={`cursor-pointer text-3xl font-bold  opacity-opacityNavLink hover:opacity-100   ${
                "header" == linkActive && "!opacity-100"
              }   `}
            >
              {resumeData.nav.logo}
              <span
                className={` w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1`}
              ></span>
            </h1>
          </ScrollLink>

          {menuActive ? (
            <XIcon
              onClick={handleMenuClose}
              className=" h-7 w-7 cursor-pointer sm:hidden    transform transition duration-150 ease-in-out"
            />
          ) : (
            <MenuIcon
              onClick={handleMenuOpen}
              className=" h-7 w-7 cursor-pointer sm:hidden     transform transition duration-150 ease-in-out"
            />
          )}
        </div>
        {/* RIGHT section */}
        <div className="space-x-5 mt-2   sm:flex hidden">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              to={item.to}
              smooth="true"
              key={i}
              activeClass={styles._active}
              spy={true}
              onSetActive={handleSetActive}
              /* offset={} */
              /* for some space between link and border -> */
              /* className="pb-1" */
              className={` //avoidNavChangingSize: border-b-2 border-mainDarkBlue `}
            >
              <span
                className={`cursor-pointer text-xl    ${
                  item.to !== linkActive && styles.hoverAnimation
                }  opacity-opacityNavLink hover:opacity-100  `}
              >
                {item.text}
              </span>
            </ScrollLink>
          ))}
        </div>

        {/*HAMBURGER MENU CONTAINER */}
        <Transition
          show={menuActive}
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={` ${menuActive ? mobileStyles.slideDown : ""}    ${
            slideClose && mobileStyles.slideClose
          }     sm:hidden flex flex-col space-y-1 items-center pb-2 w-full ///ForTakingUpTheWholeSpace: absolute top-14 bg-mainDarkBlue  `}
        >
          <ScrollLink
            to="header"
            smooth="true"
            //activeClass={styles._active}
            spy={true}
            className="flex justify-center "
          >
            <p className="cursor-pointer text-lg font-semibold">Intro</p>
          </ScrollLink>
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.to}
              smooth="true"
              activeClass={styles._active}
              spy={true}
              className="flex justify-center border-b-2 border-mainDarkBlue"
            >
              <p className="cursor-pointer text-lg font-semibold">
                {item.text}
              </p>
            </ScrollLink>
          ))}
        </Transition>
      </div>
    </div>
  );
}

export default Navigation;
