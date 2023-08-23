import logo from '../../assets/logo.png';
import app from '../../assets/pay/app.jpg';
import play from '../../assets/pay/play.jpg';
import pay from '../../assets/pay/pay.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
      className="pb-10 bg-slate-100 w-full h-auto"
    >
      <div className="md:flex md:justify-between md:mr-10 ">
        <div className="flex-col mt-10 md:ml-10">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <img
              className="w-28 md:w-36 cursor-pointer hover:translate-y-3 ease-in-out duration-200"
              src={logo}
              alt="Logo"
            />
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl text-center mt-4 md:text-left md:mt-7">
              Contact
            </div>
            <div className="flex-col flex mt-4 ">
              <div className="text-lg md:text-xl flex-col md:flex-row md:text-left text-center font-bold mt-2 ">
                Address:
                <span className="text-md md:text-lg flex h-full items-center justify-center font-normal text-slate-500 md:flex-row md:items-start md:justify-start">
                  {' '}
                  562 Wellingtopn Toad, Street 32, San Fransisco
                </span>
              </div>
              <div className="text-lg md:text-xl flex-col md:flex-row md:text-left text-center font-bold mt-2">
                Phone:
                <span className="text-md md:text-lg flex h-full items-center justify-center font-normal text-slate-500 md:flex-row md:items-start md:justify-start">
                  {' '}
                  +01 2222 365/ (+91) 01 2345 6789
                </span>
              </div>
              <div className="text-lg md:text-xl flex-col md:flex-row md:text-left text-center font-bold mt-2">
                Hours:
                <span className="text-md md:text-lg flex h-full items-center justify-center font-normal text-slate-500 md:flex-row md:items-start md:justify-start">
                  {' '}
                  10:00 - 18:00, Mon - Sat
                </span>
              </div>
            </div>
            <div className="font-bold mt-4 text-center text-xl md:text-2xl md:text-left">
              Follow Us
            </div>
            <div className="flex justify-center items-center h-full text-lg gap-3 mt-3 md:items-start md:justify-start">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="text-center tracking-wider mt-10 font-bold md:text-left md:mt-40">
          <div className="text-xl md:text-2xl">About</div>
          <ul className="text-slate-500 mt-4 text-center md:text-left ">
            <li className="my-1">About Us</li>
            <li className="my-1">Delivery information</li>
            <li className="my-1">Privacy Policy</li>
            <li className="my-1">Terms & Conditions</li>
            <li className="my-1">Contact Us</li>
          </ul>
        </div>
        <div className="hidden lg:block text-center tracking-wider mt-40 font-bold">
          <div className="text-xl md:text-2xl md:text-left">My Account</div>
          <ul className="text-slate-500 mt-4 text-center md:text-left ">
            <Link to="/login">
              <li className="my-1">Sign In</li>
            </Link>
            <li className="my-1">View Cart</li>
            <li className="my-1">My Wallet</li>
            <li className="my-1">Track My Order</li>
            <li className="my-1">Help</li>
          </ul>
        </div>
        <div className="hidden xl:grid xl:grid-cols-1  items-center text-left tracking-wider font-bold  ">
          <div className="text-2xl mt-36">Install App</div>
          <div className="text-lg text-slate-500 grid items-start">
            From App Store or Google Play
          </div>
          <div className="xl:grid xl:grid-cols-2 h-full items-center justify-center ">
            <img
              className="border-2 border-slate-500 rounded-md  cursor-pointer"
              src={app}
              alt="app"
            />
            <img
              className=" border-2 border-slate-500 ml-1 rounded-md cursor-pointer"
              src={play}
              alt="google"
            />
          </div>
          <div className="text-lg text-slate-500 ">
            Secured Payment Gateways
          </div>
          <div className="grid items-start">
            <img className="  cursor-pointer" src={pay} alt="payment" />
          </div>
        </div>
      </div>
      <div className="xl:hidden md:flex md:ml-10 md:mr-10 justify-between md:mt-10 xl:mt-0">
        <div className="lg:hidden text-center tracking-wider mt-10 font-bold">
          <div className="text-xl md:text-2xl md:text-left">My Account</div>
          <ul className="text-slate-500 mt-4 text-center md:text-left ">
            <Link to="/login">
              <li className="my-1">Sign In</li>
            </Link>
            <li className="my-1">View Cart</li>
            <li className="my-1">My Wallet</li>
            <li className="my-1">Track My Order</li>
            <li className="my-1">Help</li>
          </ul>
        </div>
        <div className="xl:hidden text-center lg:ml-96 tracking-wider mt-10 font-bold md:text-left">
          <div className="text-xl md:text-2xl">Install App</div>
          <div className="text-lg md:text-xl text-slate-500 mt-2">
            From App Store or Google Play
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-items-center items-center justify-center mt-2 md:mt-[-3rem] lg:mt-[-1rem]">
            <img
              className=" border-2 border-slate-500 rounded-md ml-1 md:ml-0 cursor-pointer md:w-36 lg:w-48"
              src={app}
              alt="app"
            />
            <img
              className=" border-2 border-slate-500 rounded-md ml-1 cursor-pointer md:w-36 lg:w-48"
              src={play}
              alt="google"
            />
          </div>
          <div className="grid justify-items-center text-lg text-slate-500 mt-2 md:mt-[-3rem] lg:mt-[-2rem]">
            Secured Payment Gateways
          </div>
          <div className="mt-2 flex items-center lg:items-start lg:justify-start justify-center h-full md:mt-[-3rem] lg:mt-3">
            <img className=" lg:w-48 cursor-pointer" src={pay} alt="payment" />
          </div>
        </div>
      </div>
      <div className="text-center font-medium text-slate-400 pt-5 md:pt-24 lg:pt-36 xl:pt-0 ">
        &#9426; Muhammad Juman, React Ecommerce Website
      </div>
    </div>
  );
};

export default Footer;
