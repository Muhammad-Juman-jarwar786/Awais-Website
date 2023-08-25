import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxToolkitHooks';
import { Button } from '../buttons/Buttons';
import CheckOutProducts from './CheckOutProducts';
import { useFormik } from 'formik';
import { shippingFormik } from '../../interface/Interfaces';
import { ShippingFormValidation } from '../../validation/ShippingFormValidation';
import { clearCart } from '../../Slice/CartProductsSlice';
import emailjs from 'emailjs-com';

const CheckOut = () => {
  const cart = useAppSelector((state) => state.addToCart.products);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  emailjs.init('F8jMeqOuNtsgB3-d_');

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

  const subTotal = useAppSelector((state) => state.setSubTotal.subTotal);

  let Total: any;
  let Shipping: any;

  if (subTotal == 0) {
    Total = 0;
    Shipping = 0;
  } else {
    Shipping = 100;
    Total = subTotal + Shipping;
  }

  const uniqueProductsArray = Object.values(uniqueProducts);

  const formik = useFormik<shippingFormik>({
    initialValues: {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      address: '',
      appartment: '',
      city: '',
      state: '',
    },
    validationSchema: ShippingFormValidation,
    onSubmit: (values) => {
      if (uniqueProductsArray.length == 0) {
        alert('You have no products in the cart please add one');
      } else {
        const isConfirmed = window.confirm(
          'Are you sure you wanna place order!'
        );
        if (isConfirmed) {
          formik.resetForm();
          console.log(values, uniqueProductsArray);
          alert('You have Successfully placed order');
          alert('you will receive your order with in 7 days');
          dispatch(clearCart());
          navigate('/');
          emailjs.send('service_z3vt49a', 'template_x86397c', {
            to_email: 'muhammad1juman@gmail.com',
            from_name: 'Muhammad juman',
            phone_number: values.phone,
            first_name: values.firstName,
            last_name: values.lastName,
            address: values.address,
            apartment: values.appartment,
            city: values.city,
            state: values.state,
            products: JSON.stringify(uniqueProductsArray),
          });
        }
      }
    },
  });

  const borderColorEmail =
    formik.touched.email && formik.errors.email
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorPhone =
    formik.touched.phone && formik.errors.phone
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorfirstName =
    formik.touched.firstName && formik.errors.firstName
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorlastName =
    formik.touched.lastName && formik.errors.lastName
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorAddress =
    formik.touched.address && formik.errors.address
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorAppartment =
    formik.touched.appartment && formik.errors.appartment
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorCity =
    formik.touched.city && formik.errors.city
      ? 'border-red-400'
      : 'border-gray-300';
  const borderColorState =
    formik.touched.state && formik.errors.state
      ? 'border-red-400'
      : 'border-gray-300';

  return (
    <>
      <div className="pt-40 mx-20">
        <div className="text-4xl font-bold mt-10">Checkout</div>
        <div className="lg:grid-cols-2 grid gap-5">
          <div className="">
            <div>
              <div className="text-2xl font-semibold mt-10">
                Contact Information
              </div>
              <div className="grid grid-cols-1 gap-4 mt-5">
                <input
                  className={`${borderColorEmail} bg-white border-2 outline-none  p-2 text-xl rounded-md w-full`}
                  type="email"
                  placeholder="Email"
                  name="email"
                  id=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                    {formik.errors.email}
                  </div>
                ) : null}
                <input
                  className={`${borderColorPhone} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                  type="number"
                  placeholder="Phone"
                  required
                  name="phone"
                  id=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold mt-10">
                Shipping Information
              </div>
              <div>
                <div className="grid grid-cols-1 gap-4 mt-5">
                  <input
                    className={`${borderColorfirstName} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                  <input
                    className={`${borderColorlastName} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
                <div className="grid grid-cols-1 gap-4 mt-5">
                  <input
                    className={`${borderColorAddress} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
                <div className="grid grid-cols-1 gap-4 mt-5">
                  <input
                    className={`${borderColorAppartment} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                    type="text"
                    placeholder="Appartment, suite, etc. (optional) "
                    name="appartment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.appartment}
                  />
                  {formik.touched.appartment && formik.errors.appartment ? (
                    <div className="text-red-500 text-left mt-[-10px] text-sm lg:text-lg lg:mt-[-20px]">
                      {formik.errors.appartment}
                    </div>
                  ) : null}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div>
                    <input
                      className={`${borderColorCity} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div className="text-red-500 text-left text-sm lg:text-lg ">
                        {formik.errors.city}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <input
                      className={`${borderColorState} bg-white border-2 outline-none p-2 text-xl rounded-md w-full`}
                      type="text"
                      placeholder="State"
                      name="state"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                    />
                    {formik.touched.state && formik.errors.state ? (
                      <div className="text-red-500 text-left text-sm lg:text-lg ">
                        {formik.errors.state}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid justify-between grid-cols-2 mt-10 mb-10">
              <Link to="/cart">
                <button className="text-blue-600 text-lg w-fit">
                  <span>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>{' '}
                  Return to cart
                </button>
              </Link>

              <Button
                type="submit"
                onClick={formik.handleSubmit}
                className="btnCheckOut bg-emerald-600 text-white font-bold p-2 rounded-md text-lg w-fit"
              >
                Place Order
              </Button>
            </div>
          </div>

          <div className=" ml-10 mr-10">
            <div className=" ">
              {uniqueProductsArray.map((items: any, index: any) => (
                <CheckOutProducts
                  key={index}
                  id={items.id}
                  img={items.img}
                  title={items.title}
                  alt={items.alt}
                  quantity={items.quantity}
                  price={items.price}
                />
              ))}
            </div>
            <div className="text-center grid items-center justify-center">
              <hr className="mt-5" />
              <div className="mt-10">
                <input
                  className="outline-none border-2 border-gray-300 rounded-l-md p-1 w-40 text-lg lg:text-xl lg:w-56 lg:p-2 lg:rounded-md"
                  placeholder="XYZ123"
                  type="text"
                />
                <Button className="btn text-lg font-bold text-white p-1 border-2 border-emerald-600 bg-emerald-600 rounded-r-md lg:text-xl lg:p-2 lg:w-28 lg:rounded-md lg:mt-2">
                  Apply
                </Button>
              </div>
              <hr className="mt-5" />
              <div className="flex text-2xl font-bold gap-20 mt-5">
                <div>Subtotal</div>
                <div>{subTotal}Rs</div>
              </div>
              <div className="flex text-2xl font-bold gap-20 mt-5">
                <div>Shipping</div>
                <div>{Shipping}Rs</div>
              </div>
              <hr className="mt-5" />
              <div className="flex text-2xl font-bold gap-20 mt-5 mb-10">
                <div>Total </div>
                <div>{Total}Rs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckOut;
