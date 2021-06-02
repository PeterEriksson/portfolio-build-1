import resumeData from "../resumeData.json";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  const hej = true;
  return (
    <div
      className="fixed top-0 w-screen z-40"
      style={{ background: "#091c29" }}
    >
      <div className="flex items-center  text-white justify-between w-10/12 mx-auto py-3">
        <ScrollLink
          to="header"
          smooth="true"
          activeClass="active"
          spy={true}
          /* style={`${{ activeClass } && { background: "red" }}`} */
        >
          <h1 className="cursor-pointer text-3xl font-bold">
            {resumeData.nav.logo}
            <span className="w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1"></span>
          </h1>
        </ScrollLink>
        <div className=" ">
          {resumeData.nav.links.map((item, i) => (
            <ScrollLink to={item.to} smooth="true" key={i}>
              <span key={i} className="cursor-pointer text-xl mr-4">
                {item.text}
              </span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
