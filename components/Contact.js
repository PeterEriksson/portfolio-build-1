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
        <div className="flex flex-col text-white w-80">
          <h1 className="text-5xl text-white font-bold mr-10 mb-4">Ping me!</h1>
          <p>Several React & Firebase projects built</p>
          <p>Fluent in Swedish and English, B1-level in German</p>
          <p>75 university credits computer science</p>
        </div>
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
