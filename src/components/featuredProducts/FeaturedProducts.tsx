import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
import { ProductsData } from '../../data/ProductsData';
// import { useEffect } from 'react';

const FeaturedProducts = () => {
  const productsToShow: number = 8;

  return (
    <>
      <div className="ml-10 mr-10">
        <div className="md:ml-10 md:mr-10 items-center justify-center text-center mt-20">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
            className="text-4xl opacity-0 font-bold text-black tracking-widest"
          >
            Featured Products
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-md text-slate-400 mt-4 opacity-0"
          >
            Summer Collection New Modern Design
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto ">
          {ProductsData.slice(0, productsToShow).map((product) => (
            <FeaturedProductsCard
              key={product.id}
              id={product.id}
              img={product.img}
              alt={product.alt}
              category={product.category}
              title={product.title}
              price={product.price}
              animation={product.animation}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
