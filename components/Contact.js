import { LazyLoadImage } from "react-lazy-load-image-component";
import resumeData from "../resumeData.json";

function Contact() {
  return (
    <div
      id="contact"
      style={{ background: "#091c29" }}
      className="flex min-h-screen justify-center"
    >
      <div className="flex mt-10">
        <h1 className="text-5xl text-white font-bold mr-10">Ping me!</h1>
        <LazyLoadImage
          src={resumeData.header.imgGuinness}
          effect="blur"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default Contact;
