import b7 from '../../assets/banner/b7.jpg';
import b4 from '../../assets/banner/b4.jpg';
import b18 from '../../assets/banner/b18.jpg';

const BannerTriad = () => {
  const bannerStyles: React.CSSProperties = {
    backgroundImage: `url(${b7})`,
  };
  const bannerStyles2: React.CSSProperties = {
    backgroundImage: `url(${b4})`,
  };
  const bannerStyles3: React.CSSProperties = {
    backgroundImage: `url(${b18})`,
  };

  return (
    <div className="overflow-hidden md:m-10 lg:mx-20 md:mt-0 mt-20 md:mb-0 mb-10">
      <div className="flex flex-col md:flex-row md:gap-10 w-full md:h-72">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={`mb-10 h-56 w-full md:w-1/2 lg:w-1/3 flex justify-between text-left items-center bg-cover gap-5 md:bg-cover md:bg-center`}
          style={bannerStyles}
        >
          <div className="tracking-wider font-bold ml-6">
            <div className="text-2xl text-white">SEASONAL SALE</div>
            <div className="text-red-500">Winter Collection -50% Off</div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={`mb-10 h-56 w-full md:w-1/2 lg:w-1/3 flex justify-between text-left items-center bg-cover gap-5 md:bg-cover md:bg-center`}
          style={bannerStyles2}
        >
          <div className="tracking-wider font-bold ml-6">
            <div className="text-2xl text-white">NEW FOOTWEAR COLLECTION</div>
            <div className="text-red-500">Spring/Summer 2023</div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className={`mb-10 h-56 w-full lg:w-1/3 hidden lg:flex justify-between text-left items-center bg-cover gap-5 md:bg-cover md:bg-center`}
          style={bannerStyles3}
        >
          <div className="tracking-wider font-bold ml-6">
            <div className="text-2xl text-white">T-SHIRTS</div>
            <div className="text-red-500">New Trendy Prints</div>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-back"
        className={`mb-10 h-56 lg:hidden w-full flex justify-between text-left items-center bg-cover gap-5 md:bg-cover md:bg-center`}
        style={bannerStyles3}
      >
        <div className="tracking-wider font-bold ml-6">
          <div className="text-2xl text-white">T-SHIRTS</div>
          <div className="text-red-500">New Trendy Prints</div>
        </div>
      </div>
    </div>
  );
};

export default BannerTriad;
