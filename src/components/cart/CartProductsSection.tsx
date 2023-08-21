import CartProduct from './CartProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxToolkitHooks';
import { removeFromCart } from '../../Slice/CartProductsSlice';
import { useEffect, useState } from 'react';
import { setSubTotal } from '../../Slice/CartTotalsSlice';
// import { store } from '../../redux/store';

const CartProductsSection = () => {
  const cart = useAppSelector((state) => state.addToCart.products);

  const dispatch = useAppDispatch();

  const uniqueProducts: any = {};

  cart.forEach((item) => {
    if (uniqueProducts[item.id]) {
      uniqueProducts[item.id].quantity += 1;
      uniqueProducts[item.id].total =
        uniqueProducts[item.id].quantity * uniqueProducts[item.id].price;
    } else {
      uniqueProducts[item.id] = {
        id: item.id,
        img: item.img,
        title: item.title,
        price: item.price,
        alt: item.alt,
        quantity: 1,
        total: item.price,
      };
    }
  });

  const uniqueProductsArray = Object.values(uniqueProducts);

  const removeProductHandler = (product: any) => {
    dispatch(removeFromCart(product));
  };

  const [subTotalVal, setSubTotalVal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, product: any) => {
      return accumulator + parseFloat(product.price);
    }, 0);

    setSubTotalVal(total);
  }, [cart]);

  useEffect(() => {
    dispatch(setSubTotal(subTotalVal));
  }, [subTotalVal]);

  return (
    <div className="mt-10">
      {uniqueProductsArray.length === 0 ? (
        <p className="text-2xl text-center text-black font-bold mt-32">
          Your cart is Currently empty.
        </p>
      ) : (
        <table className="justify-center grid-cols-1 grid gap-5">
          <thead className="">
            <tr className=" text-bold text-sm lg:text-lg grid grid-cols-6">
              <th className="border-b-2 border-t-2 p-3">IMAGE</th>
              <th className="border-b-2 border-t-2 p-3">PRODUCT</th>
              <th className="border-b-2 border-t-2 p-3">PRICE</th>
              <th className="border-b-2 border-t-2 p-3">QUANTITY</th>
              <th className="border-b-2 border-t-2 p-3">SUBTOTAL</th>
              <th className="border-b-2 border-t-2 p-3">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {uniqueProductsArray.map((product: any, index: any) => (
              <CartProduct
                key={index}
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                alt={product.alt}
                quantity={product.quantity}
                total={product.total}
                removeProduct={() => removeProductHandler(product.id)}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartProductsSection;
