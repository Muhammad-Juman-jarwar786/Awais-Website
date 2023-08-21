import { NavLink, useLocation } from 'react-router-dom';
import './MenuItem.css';

const MenuItems = (props: any) => {
  const location = useLocation();

  return (
    <NavLink to={props.to} className=" relative cursor-pointer group MenuItems">
      <li
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="2000"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-offset="0"
        onClick={props?.closeMenuHandler}
        className="relative"
      >
        {props.title}
        <span
          className={`absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 ease-in-out underline 
          ${
            location.pathname === `${props.to}` ||
            location.pathname.startsWith(`${props.pathnamestarts}?`)
              ? 'w-full'
              : 'w-0'
          }`}
        ></span>
      </li>
    </NavLink>
  );
};

export default MenuItems;
