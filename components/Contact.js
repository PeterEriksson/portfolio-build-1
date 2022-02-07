import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";
import { MailIcon } from "@heroicons/react/solid";

function Contact() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      id="contact"
      style={{ background: "#091c29" }}
      className="flex min-h-screen justify-center items-center"
    >
      <div
        className={`${
          !animated && "opacity-0"
        } transform transition duration-1000 mr-5 ease-in-out flex text-white w-80`}
      >
        <div className="flex flex-col pl-4">
          <h1 className="xs:text-5xl text-3xl text-white font-bold mr-10 mb-4">
            Ping me!
          </h1>
          <p className="xs:text-base text-sm">
            I am Peter Eriksson, a self-taught front end-developer. I am
            especially in to React, where I've built several pojects. Always
            eager to learn new stuff. Fluent in Swedish and English. 75
            university credits computer science.
          </p>

          <div className="flex flex-col font-extralight text-sm ">
            <MailIcon className="h-9 w-9 cursor-pointer" />
            <p>Github:</p>
            <p>Instagram:</p>
            <p>Linkedin:</p>
          </div>
        </div>
      </div>

      {/* right image container */}
      <div className="pr-4">
        <LazyLoadImage
          src={resumeData.header.imgGuinness2}
          effect="blur"
          className="rounded-xl "
          /* height="350px"
          width="200px" */
        />
      </div>
    </div>
  );
}

export default Contact;
