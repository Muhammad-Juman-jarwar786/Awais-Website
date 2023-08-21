const CartProduct = (props: any) => {
  return (
    <tr className="mt-3 text-sm lg:text-lg grid grid-cols-6 justify-items-center text-center font-medium">
      <td className="w-14 lg:w-20">
        <img
          className="transition-all duration-700 hover:scale-150 cursor-pointer object-cover hover:shadow-md hover:border-4 hover:border-white"
          src={props.img}
          alt={props.alt}
        />
      </td>
      <td className="items-center grid grid-cols-1">
        <p className="text-md xl:text-xl">{props.title}</p>
      </td>
      <td className="items-center grid grid-cols-1">
        <p className="text-md xl:text-xl">${props.price}</p>
      </td>
      <td className="items-center grid grid-cols-1">
        <input
          className="outline-none border-2 border-gray-300 w-12 font-bold p-1 h-8 xl:w-14 xl:h-12 xl:text-xl bg-transparent text-center"
          type="number"
          readOnly
          value={props.quantity}
        />
      </td>
      <td className="items-center grid grid-cols-1">
        <p className="text-md xl:text-xl">${props.total}</p>
      </td>
      <td
        onClick={props.removeProduct}
        className="items-center grid grid-cols-1"
      >
        <i className="transition-all duration-700 hover:scale-125 cursor-pointer text-red-600 text-lg lg:text-xl xl:text-2xl fa-solid fa-trash"></i>
      </td>
    </tr>
  );
};

export default CartProduct;
