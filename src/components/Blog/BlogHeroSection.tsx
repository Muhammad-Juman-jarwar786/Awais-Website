import HeroBanner from '../banner/HeroBanner';
import b19 from '../../assets/banner/b19.jpg';

const BlogHeroSection = () => {
  const bannerStyle = {
    backgroundImage: `url(${b19})`,
  };

  return (
    <HeroBanner
      height="lg:h-[30rem]"
      banner={bannerStyle}
      title="#readmore"
      description="Read all case studies about our products!"
    />
  );
};

export default BlogHeroSection;
