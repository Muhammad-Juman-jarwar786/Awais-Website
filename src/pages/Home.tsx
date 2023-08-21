import Banner from '../components/banner/Banner';
import BannerShowCase from '../components/banner/BannerShowCase';
import BannerTriad from '../components/banner/BannerTriad';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts';
import Features from '../components/features/Features';
import HeroSection from '../components/heroSection/HeroSection';
import NewArrival from '../components/newArrivals/NewArrival';
import NewsLetter from '../components/newsLetter/NewsLetter';

const Home = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-100 w-full h-auto overflow-hidden"
      >
        <HeroSection />
        <Features />
        <FeaturedProducts />
        <Banner />
        <NewArrival />
        <BannerShowCase />
        <BannerTriad />
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
