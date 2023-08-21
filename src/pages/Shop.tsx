import NewsLetter from '../components/newsLetter/NewsLetter';
import HeroSection from '../components/shop/HeroSection';
import ProductSection from '../components/shop/ProductSection';

const Shop = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-100 w-full h-auto"
      >
        <HeroSection />
        <ProductSection />
        <NewsLetter />
      </div>
    </>
  );
};

export default Shop;
