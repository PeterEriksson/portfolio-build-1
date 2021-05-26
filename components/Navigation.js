import resumeData from "../resumeData.json";

function Navigation() {
  return (
    <div style={{ background: "#091c29" }}>
      <div className="flex items-center text-white justify-between w-10/12 mx-auto py-3">
        <h1 className="cursor-pointer text-3xl font-bold">
          {resumeData.nav.logo}
          <span className="w-2 h-2 bg-red-500 inline-block rounded-full ml-2 mb-1"></span>
        </h1>
        <div className=" ">
          {resumeData.nav.links.map((item, i) => (
            <span key={i} className="cursor-pointer text-xl mr-4">
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
