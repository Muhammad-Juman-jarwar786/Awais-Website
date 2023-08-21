import CartHeroSection from '../components/cart/CartHeroSection';
import CartProductsSection from '../components/cart/CartProductsSection';
import CartTotalSection from '../components/cart/CartTotalSection';

const Cart = () => {
  return (
    <>
      <div
        style={{
          fontFamily: 'Roboto Slab',
          fontWeight: 400,
        }}
        className="bg-slate-100 w-full h-auto"
      >
        <CartHeroSection />
        <CartProductsSection />
        <CartTotalSection />
      </div>
    </>
  );
};

export default Cart;
