import HeroBanner from '../banner/HeroBanner';
import b1 from '../../assets/banner/b1.jpg';

const HeroSection = () => {
  const bannerStyle = {
    backgroundImage: `url(${b1})`,
  };

  return (
    <HeroBanner
      height="h-80"
      banner={bannerStyle}
      title="#stayhome"
      description="Save more with coupons & up to 70% off!"
    />
  );
};

export default HeroSection;
