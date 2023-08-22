import FeaturedProductsCard from '../productCard/FeaturedProductsCard';
import { Button } from '../buttons/Buttons';
import { useEffect, useState } from 'react';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  const productsPerPage = 16;
  const startIndexToShow = (currentPage - 1) * productsPerPage;

  const productsToDisplay = products.slice(
    startIndexToShow,
    startIndexToShow + productsPerPage
  );

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const totalPages: number = Math.ceil(products.length / productsPerPage);
  const NextPageButton = () => {
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    return (
      <Button
        onClick={handleNextPage}
        className="btnSignUp lg:w-20 lg:h-16 w-14 h-10 bg-emerald-600 items-center rounded-md flex justify-center"
      >
        <i className="fa-solid fa-arrow-right-long w-2 font-normal mr-3"></i>
      </Button>
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin-pulse text-5xl font-bold mt-40 mb-40"></i>
        </div>
      ) : (
        <div className="ml-10 mr-10 mb-20">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 mx-auto">
            {productsToDisplay.map((item: any) => (
              <FeaturedProductsCard
                key={item.id}
                id={item.id}
                // link="/singleproduct"
                img={item.img}
                alt={item.alt}
                category={item.category}
                title={item.title}
                price={item.price}
                animation={item.animation}
              />
            ))}
          </div>
          <div className="flex h-full justify-center items-center font-bold text-2xl lg:text-3xl gap-1 mt-20 text-white">
            <Button
              onClick={() => handlePageChange(1)}
              className="btn lg:w-16 lg:h-16 w-10 h-10 bg-emerald-600 flex justify-center items-center rounded-md"
            >
              1
            </Button>
            <Button
              onClick={() => handlePageChange(2)}
              className="btn lg:w-16 lg:h-16 w-10 h-10 bg-emerald-600 flex justify-center items-center rounded-md"
            >
              2
            </Button>

            {currentPage < totalPages && <NextPageButton />}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSection;
