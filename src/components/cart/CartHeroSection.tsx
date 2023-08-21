import HeroBanner from '../banner/HeroBanner';
import banner from '../../assets/about/banner.png';

const CartHeroSection = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <>
      <HeroBanner
        height="lg:h-[24rem]"
        banner={bannerStyle}
        title="#cart"
        description="Add your coupon code and SAVE upto 70%!"
      />
    </>
  );
};

export default CartHeroSection;
