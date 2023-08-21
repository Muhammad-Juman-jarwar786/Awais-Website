const CheckOutProducts = (props: any) => {
  return (
    <>
      <div className="grid grid-cols-2 mt-5 items-center">
        <div className="flex items-center gap-5">
          <div className="w-28 relative" id={props.id}>
            <img className="rounded-lg z-10" src={props.img} alt={props.alt} />
            <span className="absolute top-0 right-0 z-50 bg-red-600 text-white rounded-full w-5 h-5 text-center font-bold">
              {props.quantity}
            </span>
          </div>
          <div>
            <div className="text-xl">{props.title}</div>
            <div className="text-gray-500">addidas</div>
          </div>
        </div>
        <div className="text-xl">{props.price}Rs</div>
      </div>
    </>
  );
};

export default CheckOutProducts;
