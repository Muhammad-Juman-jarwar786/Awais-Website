import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
// import { ProductsData } from '../../data/ProductsData';
import { useEffect, useState } from 'react';

const NewArrival = () => {
  const productsToShow = 8;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setTimeout(() => {
          alert(`Could not Found any products: ${error}`);
        }, 3000);
        setIsLoading(true);
      });
    setIsLoading(false);
  };

  return (
    <>
      <div className="ml-10 mr-10">
        <div className="items-center justify-center text-center mt-20">
          <div
            // data-aos="fade-down"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            // data-aos-anchor-placement="top-bottom"
            className="text-4xl font-bold text-black tracking-widest"
          >
            New Arrivals
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            className="text-md text-slate-400 mt-4"
          >
            Summer Collection New Modern Design
          </div>
        </div>
        {isLoading ? (
          <div className="text-center">
            <i className="fa-solid fa-spinner fa-spin-pulse text-5xl font-bold mt-10 "></i>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
            {products.slice(8, 8 + productsToShow).map((products: any) => (
              <FeaturedProductsCard
                key={products.id}
                id={products.id}
                img={products.img}
                alt={products.title}
                category={products.category}
                title={products.title}
                price={products.price}
                // animation={products.animation}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewArrival;
