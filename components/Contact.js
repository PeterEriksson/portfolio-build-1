import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import { MailIcon, AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";

function Contact() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      id="contact"
      style={{ background: "#091c29" }}
      className="flex min-h-screen justify-center "
    >
      <div className="w-10/12 flex items-center justify-between">
        <div
          className={`${
            !animated && "opacity-0"
          } transform transition duration-1000  ease-in-out flex text-white w-2/3 xs:w1/2`}
        >
          <div className="flex flex-col">
            <h1 className="xs:text-5xl text-3xl text-white font-bold //mr-10 mb-2 xs:mb-4">
              Ping me!
            </h1>
            <p className="xs:text-base text-sm   //picture-covering-mail-text: w-10/12 xs:w-2/3">
              I am Peter Eriksson, a self-taught front end-developer, especially
              in to React.js. Always eager to learn new stuff. Fluent in Swedish
              and English.
            </p>
            {/*  <p>75 university credits computer science.</p> */}

            {/*Contact info section  */}
            <section className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 //picture-covering-mail-text: mt-4 xs:mt-2.5">
              <div>
                <h3 className="xs:text-lg font-bold   hidden xs:inline">
                  Phone
                </h3>
                <div className="flex items-center xs:space-x-2 space-x-1">
                  <PhoneIcon className=" xs:w-5  w-3 h-5" />
                  <p className="text-sm">070-41...39..</p>
                </div>
              </div>
              <div>
                <h3 className="xs:text-lg font-bold   hidden xs:inline">
                  Mail
                </h3>
                <div className="flex items-center xs:space-x-2 space-x-1">
                  <MailIcon className=" xs:w-5  w-3 h-5" />
                  <p className="text-sm">peter...@hotmail.com</p>
                </div>
              </div>
              <div>
                <h3 className="xs:text-lg font-bold   hidden xs:inline">
                  Linkedin
                </h3>
                <a
                  href="https://www.linkedin.com/in/peter-eriksson-13b8b1120/"
                  target="_blank"
                >
                  <img
                    className="h-5 w-5 xs:w-6 xs:h-6 rounded-lg lg:mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div>
                <h3 className="xs:text-lg font-bold   hidden xs:inline">
                  Github
                </h3>
                <a href="https://github.com/PeterEriksson" target="_blank">
                  <img
                    className="w-5 h-5 xs:w-6 xs:h-6 rounded-lg lg:mx-auto"
                    src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                    alt="github"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* right image container */}
        <div className="//picture-covering-mail-text: pb-14 xs:pb-0">
          <LazyLoadImage
            src={resumeData.header.imgGuinness2}
            effect="blur"
            className="rounded-xl  "
            /* height="350px"
          width="200px" */
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
