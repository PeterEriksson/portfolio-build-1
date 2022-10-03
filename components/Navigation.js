import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/navigation.module.css";
import stylesMobile from "../styles/navMobile-effects.module.css";
import { useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import mobileStyles from "../styles/navMobile-effects.module.css";
import useComponentVisible from "../utils/menuVisibleHelper";
import useNavbarVisible from "../utils/navShowHideHelper";
import { Context } from "../Context";

function Navigation() {
  const { ref /* isMenuComponentVisible, setIsMenuComponentVisible */ } =
    useComponentVisible(false);
  const { isMenuComponentVisible, setIsMenuComponentVisible } =
    useContext(Context);

  const { visible } = useNavbarVisible();

  /* avoid slideClose-effect on page-reload*/
  const [initialMenuState, setInitialMenuState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitialMenuState(true);
    }, 300);
  }, []);

  const [linkActive, setLinkActive] = useState("");
  const handleSetActive = (to) => {
    setLinkActive(to);
    /* console.log(linkActive); */
  };

  const handleMenuClick = () => {
    setIsMenuComponentVisible((prev) => !prev);
  };

  /* const navBarTranspTest = true; */

  return (
    <nav
      className={`fixed top-0 w-screen z-40   transform transition duration-500 ease-in-out 
        ${
          visible
            ? "/scale-y-100 /origin-top"
            : "/scale-y-0 /origin-top /opacity-0 different-style->: translate-y-navTranslateTest "
        }    `}
      style={{ background: "#091c29" }}

      /* testing changing opacity on Nav(maybe for other projects): -> */
      /* style={
        navBarTranspTest
          ? { background: "rgba(9, 28, 41, 0.7)" }
          : { background: "#091c29" }
      } */
    >
      <section className="flex items-center  text-white justify-between  w-10/12 mx-auto   py-3 flex-col   md:flex md:flex-row">
        {/* LEFT div  (PE-logo + hamburger icon) */}
        <section className="flex justify-between items-center /bg-red-500 w-full">
          {/* PE-logo */}
          <ScrollLink
            to="header"
            smooth="true"
            /* activeClass={styles._active} */
            spy={true}
            offset={-40}
            onSetActive={handleSetActive}
            /* for some space between link and border -> */
            /* className="pb-1" */
            /* avoid navbar changing height -> have an "invinsible" bottom border -> */
            className={`relative  group  transform transition duration-300 ease-in-out  cursor-pointer`}
          >
            <h1
              className={` text-3xl font-bold  opacity-opacityNavLink hover:opacity-100   ${
                "header" == linkActive && "!opacity-100"
              }  transform transition duration-300 ease-in-out`}
            >
              {resumeData.nav.logo}
              <span
                className={` w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1`}
              ></span>
              {/* UNDERLYING BORDER for when active */}
              <div
                className={`${
                  "header" === linkActive && "!opacity-100"
                }    absolute border-b-2 opacity-0 group-hover:opacity-100   w-full transform transition duration-300 ease-in-out`}
              />
            </h1>
          </ScrollLink>

          {/* menu-btn. Toggle between hamburger and cross */}
          <section
            onClick={handleMenuClick}
            className={`md:hidden  ${stylesMobile.menuBtn}   opacity-opacityNavLink hover:opacity-100`}
          >
            {/* menu-btn__burger */}
            <section
              className={`md:hidden  ${
                isMenuComponentVisible && stylesMobile.burgerAnimation
              } ${stylesMobile.burger}`}
            ></section>
          </section>
        </section>

        {/* RIGHT div */}
        <section className="space-x-5 /mt-2  md:flex hidden">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              to={item.to}
              smooth="true"
              key={i}
              /* activeClass={styles._active} */
              spy={true}
              onSetActive={handleSetActive}
              /* offset={} */
              /* for some space between link and border -> */
              /* className="pb-1" */
              className={`relative  group ${
                item.to === linkActive && "!opacity-100"
              } opacity-opacityNavLink hover:opacity-100  transform transition duration-300 ease-in-out cursor-pointer`}
            >
              <span
                className={` text-xl  transform transition duration-300 ease-in-out`}
              >
                {item.text}
              </span>
              <div
                className={`${
                  item.to === linkActive && "!opacity-100"
                }  absolute border-b-2 opacity-0 group-hover:opacity-100  w-full transform transition duration-300 ease-in-out`}
              />
            </ScrollLink>
          ))}
        </section>

        {/*HAMBURGER MENU-CONTAINER */}
        {/* in handleCLickOutside:  if event.target.tagName.toLowerCase()=="section" then return. Maybe not best solution, since section tag where hamburger+cross lives ought to be unique */}
        {/* avoid slideClose-effect on page-reload? -> timeout fcn... */}
        <div
          ref={ref}
          className={`  
          ${
            initialMenuState && "transform transition duration-850 ease-in-out"
          } 
            
          ${
            isMenuComponentVisible
              ? "scale-y-100 origin-top"
              : ` opacity-0 scale-y-0 origin-top `
          }
             md:hidden flex flex-col space-y-1 items-center pb-2 w-full absolute top-14 bg-mainDarkBlue     shadow-2xl `}
        >
          <ScrollLink
            onClick={() => setIsMenuComponentVisible(false)}
            to="header"
            smooth="true"
            activeClass={styles._active}
            spy={true}
            className="flex justify-center "
          >
            <span
              className={`cursor-pointer text-lg font-semibold   opacity-opacityNavLink hover:opacity-100    
              ${linkActive === "header" && "opacity-100 "}          `}
            >
              Intro
            </span>
          </ScrollLink>
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              /* TEST TEMP onClick */
              onClick={() => setIsMenuComponentVisible(false)}
              key={i}
              to={item.to}
              smooth="true"
              activeClass={styles._active}
              spy={true}
              className="flex justify-center border-b-2 border-mainDarkBlue"
            >
              <span
                className={`cursor-pointer text-lg font-semibold opacity-opacityNavLink hover:opacity-100 
                ${linkActive === item.to && "opacity-100 "}      `}
              >
                {item.text}
              </span>
            </ScrollLink>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
