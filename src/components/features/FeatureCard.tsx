import { FeatureCardProps } from '../../interface/Interfaces';

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <div
      data-aos={props.animation}
      data-aos-easing="ease-in-back"
      data-aos-duration="1000"
      className="hover:animate-pulse overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 h-[40vh]"
    >
      <div className="hover:scale-105 hover:transition-all hover:duration-700 hover:shadow-2xl hover:bg-slate-300 hover:backdrop:blur-md bg-slate-200 shadow-lg rounded-md h-full flex flex-col items-center justify-center">
        <img src={props.img} alt={props.alt} className="h-32" />
        <div
          className={`${props.bgcolor} font-semibold rounded-md text-xl text-center ${props.txtcolor} p-2 mt-4`}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
