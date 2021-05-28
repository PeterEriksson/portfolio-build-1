import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TinderCard from "react-tinder-card";
import resumeData from "../resumeData.json";

function Work() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index !== 3) {
      setIndex((i) => i + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div
      id="work"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div
        aria-label="Heading text"
        className="flex flex-col items-center space-y-2 mb-3"
      >
        <h1 className="text-5xl font-bold">Projects</h1>
        <h3 className="text-xl font-extralight">Some of my work</h3>
      </div>
      {resumeData.work.map((item) => (
        <div className="flex flex-col">
          <h3>{item.title}</h3>
          <LazyLoadImage
            src={item.url}
            effect="blur"
            className="rounded-xl "
            height="400px"
            width="300px"
          />
        </div>
      ))}
    </div>
  );
}

export default Work;
