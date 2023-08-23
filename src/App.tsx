import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './fonts/CustomFonts.css';
import Footer from './components/footer/Footer';
import SingleProduct from './components/singleProduct/SingleProduct';
import Cart from './pages/Cart';
import { RouteTransition } from './animation/FlipPage';
import CheckOut from './components/checkout/CheckOut';
import Login from './pages/Login';
import AddProduct from './components/addproduct/AddProduct';

function App() {
  const handleButtonClick = () => {
    const phoneNumber = '03123883304'; // Replace with your WhatsApp number

    // Construct the WhatsApp chat URL
    const url = `https://wa.me/${phoneNumber}`;

    // Redirect the user to the WhatsApp chat
    window.location.href = url;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RouteTransition>
              <Home />
            </RouteTransition>
          }
        />
        <Route
          path="/shop"
          element={
            <RouteTransition>
              <Shop />
            </RouteTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <RouteTransition>
              <Blog />
            </RouteTransition>
          }
        />
        <Route
          path="/about"
          element={
            <RouteTransition>
              <About />
            </RouteTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <RouteTransition>
              <Contact />
            </RouteTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteTransition>
              <Cart />
            </RouteTransition>
          }
        />
        <Route
          path="/checkout"
          element={
            <RouteTransition>
              <CheckOut />
            </RouteTransition>
          }
        />
        <Route
          path="/singleproduct/:pid"
          element={
            <RouteTransition>
              <SingleProduct />
            </RouteTransition>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
      <div className="bg-white rounded-full fixed right-10 bottom-10 duration-1000 transition-all animate-bounce w-12 h-12">
        <i
          onClick={handleButtonClick}
          className="fa-brands fa-whatsapp  text-5xl xl:text-6xl font-extrabold  text-green-600 cursor-pointer relative bottom-[0.4rem] right-[0.1rem]"
        ></i>
      </div>
      <Footer />
    </>
  );
}

export default App;
