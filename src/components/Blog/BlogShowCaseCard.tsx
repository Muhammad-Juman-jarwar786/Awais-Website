const BlogShowCaseCard = (props: any) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 lg:gap-8 xl:gap-14 ml-10 mr-10 mt-10 2xl:ml-28">
        <div
          data-aos={props.imgAnimation}
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className="relative"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-10 top-3 md:top-1 lg:top-[-0.2rem] xl:top-[-0.8rem] font-bold text-gray-300 absolute ">
            {props.number}
          </div>
          <div className="">
            <img
              className="mt-10 object-cover z-40 relative w-full h-60 md:h-72 lg:h-96 xl:h-[32rem] 2xl:h-[28rem] 2xl:w-[42rem]"
              src={props.img}
              alt={props.alt}
            />
          </div>
        </div>
        <div
          data-aos={props.txtAnimation}
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          className=" mt-6 grid grid-rows-0 items-center 2xl:mr-60  justify-items-start "
        >
          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold tracking-wider md:mt-16 lg:mt-24 xl:mt-32">
            {props.title}
          </div>
          <div className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-slate-500 tracking-wider md:mb-14 lg:mb-24 xl:mb-32">
            {props.description}
          </div>
          <div className="text-black font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl md:mt-[-6rem] lg:mt-[-10rem] xl:mt-[-15rem] cursor-pointer">
            {props.button}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogShowCaseCard;
