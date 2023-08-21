import "./Button.css";

export const Button = ({ children, className = "", ...rest }: any) => {
  const buttonClasses = `
    ${className}
    hover:scale-110 transition-all duration-700 active:scale-90 shadow-md cursor-pointer text-center
  `;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
