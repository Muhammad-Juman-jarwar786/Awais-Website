import video from '../../assets/about/1.mp4';

const AboutVideo = () => {
  return (
    <div className="grid text-center items-center mt-20 mx-auto min-w-2xl">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        Download Our{' '}
        <span className="cursor-pointer underline underline-offset-1 text-violet-900">
          App
        </span>
      </div>
      <div className="mt-5 lg:mt-10 w-full">
        <div className="w-full h-96 md:h-[30rem] lg:h-[40rem] xl:h-[50rem] flex items-center justify-center">
          <video className="w-full h-full object-contain" loop muted autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
