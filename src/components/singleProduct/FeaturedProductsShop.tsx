import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
import { ProductsData } from '../../data/ProductsData';

const FeaturedProductsShop = () => {
  const productsToShow: number = 4;
  const startIndexToShow: number = 4;

  const getProductsToDisplay = (startIndex: number, numProducts: number) => {
    return ProductsData.slice(startIndex, startIndex + numProducts);
  };

  const productsToDisplay = getProductsToDisplay(
    startIndexToShow,
    productsToShow
  );

  return (
    <>
      <div className="ml-10 mr-10 mb-20">
        <div className="md:ml-10 md:mr-10 items-center justify-center text-center mt-20">
          <div className="text-4xl font-bold text-black tracking-widest">
            Featured Products
          </div>
          <div className="text-md text-slate-400 mt-4">
            Summer Collection New Modern Design
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
          {productsToDisplay.map((product) => (
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

export default FeaturedProductsShop;
