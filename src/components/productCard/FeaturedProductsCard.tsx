import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/ReduxToolkitHooks';
import { addToCart } from '../../Slice/CartProductsSlice';
import { singleProduct } from '../../Slice/SingleProductSlice';

const FeaturedProductsCard = (props: any) => {
  const dispatch = useAppDispatch();

  const SingleProduct = () => {
    dispatch(singleProduct(props));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const addToCartHandler = () => {
    dispatch(addToCart(props));
  };

  return (
    <>
      <div
        id={props.id}
        data-aos={props.animation}
        data-aos-easing="ease-in-back"
        className="bg-white w-full border-2 rounded-3xl mt-9 p-3 shadow-lg group "
      >
        <div className="peer w-full h-auto hover:scale-110 hover:shadow-xl hover:border-spacing-4 hover:border-8 hover:border-white hover:rounded-3xl transition-all duration-700 hover:animate-pulse">
          <Link to={`/singleproduct/${props.id}`}>
            <img
              onClick={SingleProduct}
              className="rounded-3xl"
              src={props.img}
              alt={props.alt}
            />
          </Link>
        </div>
        <div className="peer-hover:opacity-0">
          <p className="text-slate-400 text-xl sm:text-lg">{props.category}</p>
        </div>
        <div className="group-hover:grayscale transition-all duration-1000 hover:group-hover:grayscale-0">
          <h1 className="text-teal-700 font-medium  text-2xl sm:text-xl">
            {props.title}
          </h1>
          <div>
            <div className="text-md sm:text-sm">
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffa200' }} />
            </div>
            <div className="flex justify-between text-2xl sm:text-xl">
              <div className="text-teal-700 font-medium mt-2">
                ${props.price}
              </div>
              <div
                onClick={addToCartHandler}
                className="hover:scale-110 transition-all duration-700 active:scale-90 active:text-emerald-800 ease-in-out bg-slate-300 w-12 h-12 p-3 text-center items-center justify-center  relative rounded-full bg-opacity-40 cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-teal-700 w-7 h-7 sm:w-6 sm:h-6 m-auto"
                  icon={faCartShopping}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsCard;
