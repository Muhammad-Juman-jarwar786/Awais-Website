import FeatureCard from './FeatureCard';
import { FeaturesData } from '../../data/FeaturesData';

const Features = () => {
  return (
    <div className=" overflow-hidden flex flex-wrap justify-center mt-20">
      {FeaturesData.map((feature) => (
        <FeatureCard
          key={feature.id}
          img={feature.img}
          title={feature.title}
          bgcolor={feature.bgcolor}
          txtcolor={feature.txtcolor}
          alt={feature.alt}
          animation={feature.animation}
        />
      ))}
    </div>
  );
};

export default Features;
