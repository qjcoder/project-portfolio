const Button = (props) => {
  return (
    <button
      className="flex justify-between items-center p-3 gap-2  rounded-full text-sm font-light uppercase"
      style={{
        color: props.textColor,
        backgroundColor: props.bgColor,
      }}
    >
      <span className="sm:hidden ">{props.icon}</span>
      <span className="hidden sm:block">{props.text}</span>
    </button>
  );
};

export default Button;
