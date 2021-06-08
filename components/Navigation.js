import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";
import styles from "./button-active.module.css";

function Navigation() {
  const hej = true;
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

        {/* RIGHT section */}
        <div className="flex space-x-5 mt-2">
          <ScrollLink
            to={resumeData.nav.links[0].to}
            smooth="true"
            key={resumeData.nav.links[0].text}
            activeClass={styles._active}
            spy={true}
            /* offset={} */
            /* for some space between link and border -> */
            className="pb-1"
          >
            <span className="cursor-pointer text-xl ">
              {resumeData.nav.links[0].text}
            </span>
          </ScrollLink>
          <ScrollLink
            to={resumeData.nav.links[1].to}
            smooth="true"
            key={resumeData.nav.links[1].text}
            activeClass={styles._active}
            spy={true}
            /* offset={-100} */
            /* for some space between link and border-bottom -> */
            className="pb-1"
          >
            <span className="cursor-pointer text-xl ">
              {resumeData.nav.links[1].text}
            </span>
          </ScrollLink>

          <ScrollLink
            to={resumeData.nav.links[2].to}
            smooth="true"
            key={resumeData.nav.links[2].text}
            activeClass={styles._active}
            spy={true}
            /* offset={-100} */
            /* for some space between link and border -> */
            className="pb-1"
          >
            <span className="cursor-pointer text-xl ">
              {resumeData.nav.links[2].text}
            </span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
