import HeroBanner from '../banner/HeroBanner';
import banner from '../../assets/about/banner.png';

const AboutHeroSection = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <>
      <HeroBanner
        height="lg:h-[30rem]"
        banner={bannerStyle}
        title="#KnowUs"
        description="We Are an Online Ecommerce Website!"
      />
    </>
  );
};

export default AboutHeroSection;
