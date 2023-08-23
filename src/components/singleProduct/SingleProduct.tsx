import FeaturedProductsShop from './FeaturedProductsShop';
import NewsLetter from '../newsLetter/NewsLetter';
import { Button } from '../buttons/Buttons';
import { useAppDispatch } from '../../hooks/ReduxToolkitHooks';
import { addToCart } from '../../Slice/CartProductsSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingleProduct = () => {
  const { pid }: any = useParams();
  const dispatch = useAppDispatch();
  const [productstoshow, setproductstoshow] = useState<any>({});
  const [secondaryImages, setsecondaryImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | undefined>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [pid]);

  useEffect(() => {
    if (products.length === 0) return;
    setData();
  }, [products, pid]);

  const fetchProducts = () => {
    const firebaseEndpoint =
      'https://awais-website-df858-default-rtdb.firebaseio.com/products.json';
    fetch(firebaseEndpoint)
      .then(async (response) => {
        const data = await response.json();
        if (data) {
          const productsArray: any = Object.values(data);
          setProducts(productsArray);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const handleSecondaryImage = (image: string) => {
    setMainImage(image);
  };
  const setData = () => {
    const data = products.find((p: any) => p.id === pid);
    setproductstoshow(data);
    setMainImage(productstoshow.img);
    setsecondaryImages([
      productstoshow.img,
      productstoshow.img1,
      productstoshow.img2,
      productstoshow.img3,
    ]);
  };

  const onAddToCartHandler = () => {
    dispatch(addToCart(productstoshow));
  };

  return (
    productstoshow && (
      <>
        <div key={productstoshow.id} className="pt-40 bg-slate-50 md:flex">
          <div className="ml-20 mr-20 lg:mr-40 lg:w-[120vw] xl:w-[100vw]">
            <div className="w-full md:w-[45vw] 2xl:w-[35vw]">
              <img
                loading="lazy"
                className="w-full h-auto object-cover"
                src={mainImage}
                alt=""
              />
            </div>
            {secondaryImages && (
              <div className="flex gap-2 mt-2">
                {secondaryImages.map((image, index) => (
                  <div className="cursor-pointer" key={index}>
                    <img
                      loading="lazy"
                      className="w-40"
                      src={image}
                      alt={`Secondary Image ${index + 1}`}
                      onClick={() => handleSecondaryImage(image)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="font-bold tracking-wider text-center lg:text-left mt-10">
            <div className="text-slate-500 text-md lg:text-xl ">
              Home/T-Shirt
            </div>
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
              {productstoshow.description}
            </p>
          </div>
        </div>
        <FeaturedProductsShop />
        <NewsLetter />
      </>
    )
  );
};

export default SingleProduct;
