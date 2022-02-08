import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/button-active.module.css";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Navigation() {
  return (
    <div
      className="fixed top-0 w-screen z-40"
      style={{ background: "#091c29" }}
    >
      <div className="flex items-center  text-white justify-between w-10/12 mx-auto py-3">
        {/* LEFT section */}
        <ScrollLink
          to="header"
          smooth="true"
          activeClass={styles._active}
          spy={true}
          offset={-40}
          /* for some space between link and border -> */
          /* className="pb-1" */
        >
          <h1 className="cursor-pointer text-3xl font-bold">
            {resumeData.nav.logo}
            <span className="w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1"></span>
          </h1>
        </ScrollLink>

        {/* RIGHT section -> loop through instead -> cleaner. ok. */}
        <div className="flex space-x-5 mt-2">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink
              to={item.to}
              smooth="true"
              key={i}
              activeClass={styles._active}
              spy={true}
              /* offset={} */
              /* for some space between link and border -> */
              className="pb-1"
            >
              <span className="cursor-pointer text-xl ">{item.text}</span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
