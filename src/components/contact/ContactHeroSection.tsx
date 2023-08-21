import HeroBanner from '../banner/HeroBanner';
import banner from '../../assets/about/banner.png';

const ContactHeroSection = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <>
      <HeroBanner
        height="lg:h-[30rem]"
        banner={bannerStyle}
        title="#let's_talk"
        description="LEAVE A MESSAGE, We love to hear from you!"
      />
    </>
  );
};

export default ContactHeroSection;
