const HeroBanner = (props: any) => {
  return (
    <div className="pt-24">
      <div
        className={`w-full h-64 ${props?.height} object-cover  text-white items-center justify-center flex flex-col font-bold`}
        style={props.banner}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl">{props.title}</div>
        <div className="text-lg text-slate-200 mt-1 md:text-xl lg:text-2xl md:mt-2 lg:mt-4">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
