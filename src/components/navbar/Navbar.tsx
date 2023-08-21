import React, { useRef, useState, useEffect } from 'react';
import {
  faBars,
  faTimes,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuitems/MenuItems';
import { NavLink } from 'react-router-dom';
import { MenuData } from '../../data/MenuData';
import logo from '../../assets/logo.png';
import {
  CartIconAnimation,
  NavbarAnimation,
  ShowMobileMenu,
  mobCartIconAnimation,
  mobMenuNavbar,
} from '../../animation/Navbar';
import { useAppSelector } from '../../hooks/ReduxToolkitHooks';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const cartRef = useRef<HTMLAnchorElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const mobCartRef = useRef<HTMLAnchorElement | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  ShowMobileMenu(menuRef, showMenu);
  mobMenuNavbar(logoRef, showMenu);
  NavbarAnimation(logoRef);
  CartIconAnimation(cartRef);
  mobCartIconAnimation(mobCartRef);

  const closeMenu = () => {
    setShowMenu(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [isHighlighted, setIsHighlighted] = useState(false);

  const products = useAppSelector((state) => state.addToCart.products);

  const totalproducts = products.length;

  useEffect(() => {
    setIsHighlighted(true);

    const timeoutId = setTimeout(() => {
      setIsHighlighted(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [products]);

  return (
    <div className="overflow-hidden">
      <nav
        ref={logoRef}
        className="NavBar fixed z-50 overflow-hidden md:flex md:justify-between bg-slate-100 w-full h-full drop-shadow-xl"
      >
        <div className="flex justify-between">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-offset="0"
            className="LOGO w-40"
          >
            <img
              className="w-40 h-[10vh] cursor-pointer hover:translate-x-3 ease-in-out duration-200"
              src={logo}
              alt="Logo"
            />
          </div>
          <NavLink
            to="/cart"
            ref={mobCartRef}
            onClick={scrollTop}
            className={`md:hidden mt-8 relative cursor-pointer justify-center items-start sm:items-center  h-[10vh] flex group transition-all duration-100 ${
              isHighlighted ? 'scale-125' : ''
            }`}
          >
            <FontAwesomeIcon
              className="hover:scale-110 ease-in-out transition-all duration-700 text-[1.9rem] relative"
              icon={faCartShopping}
            />
            <span className=" group-hover:scale-110 hover:group-hover:scale-100 ease-in-out transition-all duration-700 absolute left-3 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {totalproducts}
            </span>
          </NavLink>
          <div
            onClick={toggleMenu}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-offset="0"
            className=" text-4xl flex mt-12 w-40 text-center justify-center cursor-pointer md:hidden"
          >
            {showMenu ? (
              <FontAwesomeIcon
                className="hover:scale-110 ease-in-out transition-all duration-500"
                icon={faTimes}
              />
            ) : (
              <FontAwesomeIcon
                className="hover:scale-110 ease-in-out transition-all duration-500"
                icon={faBars}
              />
            )}
          </div>
        </div>
        <div ref={menuRef} className={`mt-20 ${showMenu ? 'block' : ''}`}>
          <ul className="h-full font-bold text-2xl text-center flex flex-col sm:gap-7">
            {MenuData.map((item, i) => (
              <React.Fragment key={i}>
                <MenuItems
                  key={i}
                  closeMenuHandler={closeMenu}
                  title={item.title}
                  to={item.to}
                  pathname={item.pathname}
                  pathnamestarts={item.pathnamestarts}
                />
                <hr className="text-slate-800 border-b-2 border-slate-200 top-[-1.8rem] relative z-0 hidden sm:block" />
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="text-2xl md:flex hidden font-semibold items-center justify-center">
          <ul className="flex flex-row gap-10 mr-[10vw]">
            {MenuData.map((item, i) => (
              <MenuItems
                key={i}
                closeMenuHandler={scrollTop}
                title={item.title}
                to={item.to}
                pathname={item.pathname}
                pathnamestarts={item.pathnamestarts}
              />
            ))}
            <NavLink
              to="/cart"
              ref={cartRef}
              className={`relative cursor-pointer group transition-all duration-100 ${
                isHighlighted ? 'scale-125' : ''
              }`}
              onClick={scrollTop}
            >
              <FontAwesomeIcon
                className="text-[1.9rem] hover:scale-110 ease-in-out transition-all duration-700"
                icon={faCartShopping}
              />
              <span className="group-hover:scale-110 hover:group-hover:scale-100 ease-in-out transition-all duration-700 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totalproducts}
              </span>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
