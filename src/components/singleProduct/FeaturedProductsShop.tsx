import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
// import { ProductsData } from '../../data/ProductsData';
import { useEffect, useState } from 'react';

const FeaturedProductsShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const firebaseEndpoint =
      'https://awais-website-df858-default-rtdb.firebaseio.com/products.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const productsArray: any = Object.values(data);
          setProducts(productsArray);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const productsToShow: number = 4;
  const startIndexToShow: number = 4;

  const getProductsToDisplay = (startIndex: number, numProducts: number) => {
    return products.slice(startIndex, startIndex + numProducts);
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
          {productsToDisplay.map((product: any) => (
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
