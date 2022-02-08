import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";

function Stack() {
  return (
    <div
      id="stack"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-200   "
    >
      <h1 className="text-3xl xs:text-5xl font-bold mt-4">Tech I use</h1>

      <div className="flex flex-wrap justify-center mt-5  max-w-3xl  ">
        {resumeData.stack.tech.map((item, i) => (
          <span
            key={i}
            className="transition duration-200 transform hover:scale-110 p-3 group bg-white  w-28 h-28 xs:w-40 xs:h-40 shadow-2xl m-4 flex flex-col justify-center  rounded-full"
          >
            <LazyLoadImage
              src={item.img}
              alt={item.alt}
              key={i}
              className="rounded-full object-contain"
            />
            <p className="flex cursor-default font-normal justify-center opacity-0 group-hover:opacity-100 transition duration-250 transform ease-in text-verySmall xs:text-sm">
              {item.desc}
            </p>
          </span>
        ))}
      </div>
      <p className="w-10/12 sm:max-w-md md:max-w-2xl text-center font-extralight mt-4 mb-2 text-sm  xs:text-base">
        {resumeData.stack.dummyText2}
      </p>
    </div>
  );
}

export default Stack;
