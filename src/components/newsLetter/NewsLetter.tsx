import b14 from "../../assets/banner/b14.png";
import { Button } from "../buttons/Buttons";

const NewsLetter = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: `url(${b14})`,
  };

  return (
    <div className="flex">
      <div
        className="object-fit w-full bg-left h-52 bg-cover bg-[#041d44]"
        style={bannerStyles}
      >
        <div className="lg:flex lg:mt-14 lg:items-center lg:text-center lg:justify-between tracking-wider ml-2 text-white text-center">
          <div className="lg:text-left lg:ml-10">
            <div className="font-bold text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-5">
              Sign Up For Newsletter
            </div>
            <div className="font-bold text-slate-300 mt-4 text-md md:text-lg lg:text-xl">
              Get E-mail updates about our latest shop and
              <span className="font-bold text-orange-400">
                {" "}
                special offers.
              </span>
            </div>
          </div>
          <div className="flex-row lg:flex lg:mr-10 font-bold tracking-wider mt-5">
            <input
              className="outline-none text-black  p-3 w-52 md:w-64 lg:w-96 rounded-l-md text-md md:text-lg lg:text-xl"
              type="email"
              placeholder="Your email address"
            />
            <Button className="btnSignUp bg-emerald-600 w-28 md:w-36 lg:w-40 px-4 p-3 text-white rounded-r-md text-md md:text-lg lg:text-xl">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
