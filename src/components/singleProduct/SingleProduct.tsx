import FeaturedProductsShop from './FeaturedProductsShop';
import NewsLetter from '../newsLetter/NewsLetter';
import { Button } from '../buttons/Buttons';
import { useAppDispatch } from '../../hooks/ReduxToolkitHooks';
import { addToCart } from '../../Slice/CartProductsSlice';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../data/ProductsData';

const SingleProduct = () => {
  const { pid }: any = useParams();
  const productstoshow: any = ProductsData.find((p) => p.id === parseInt(pid));

  const dispatch = useAppDispatch();

  const onAddToCartHandler = () => {
    dispatch(addToCart(productstoshow));
  };

  return (
    <>
      <div key={productstoshow.id} className="pt-40 bg-slate-50 md:flex">
        <div className="ml-20 mr-20 lg:mr-10 lg:w-[180vw] ">
          <div className="w-96 h-auto lg:w-fit lg:h-auto bg-gray-600 flex mx-auto">
            <img className="w-full" src={productstoshow.img} alt="" />
          </div>
        </div>
        <div className="font-bold tracking-wider text-center lg:text-left mt-10">
          <div className="text-slate-500 text-md lg:text-xl ">Home/T-Shirt</div>
          <div className="text-black text-2xl mt-2 lg:text-4xl">
            {productstoshow.title}
          </div>
          <div className="text-slate-700 text-lg mt-2 lg:text-2xl">
            {productstoshow.price}
          </div>
          <select
            className="text-slate-700 text-lg border-2 outline-none border-slate-400 mt-2 p-1 bg-transparent lg:p-2 lg:text-xl lg:mt-5"
            name="Select-size"
            id=""
          >
            <option value="size">Select size</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">XL</option>
            <option value="2xl">2XL</option>
          </select>
          <div className="mt-2 lg:mt-5">
            {/* <input
                className="w-14 lg:w-20 lg:text-xl h-full p-2 lg:p-3 border-2 text-lg border-slate-400 text-center outline-none"
                type="number"
                onChange={inputChangeHandler}
                value={inputVal}
              /> */}
            <Button
              onClick={onAddToCartHandler}
              className="btn p-2 lg:p-3 h-full text-white bg-emerald-600 text-lg lg:text-xl"
            >
              Add To Cart
            </Button>
          </div>
          <div className="text-black text-2xl mt-4 lg:text-3xl">
            Product Details
          </div>
          <p className="mt-2 text-sm md:text-lg lg:text-xl  text-justify ml-6 mr-6 lg:mr-16 lg:ml-1 text-slate-500 font-semibold mb-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            libero blanditiis temporibus aut corrupti magni ullam voluptatem
            quod atque pariatur, sunt, eaque sed suscipit tempore voluptatibus
            obcaecati laborum? Asperiores, ipsam?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita velit fugiat amet, voluptate
            sint et ducimus iusto natus quisquam dolores iste, magnam
            necessitatibus eaque nam voluptatem praesentium obcaecati temporibus
            eos?
          </p>
        </div>
      </div>

      <FeaturedProductsShop />
      <NewsLetter />
    </>
  );
};

export default SingleProduct;
