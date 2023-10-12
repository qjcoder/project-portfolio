const Button = ({ color, backgroundColor, icon, text }) => {
  return (
    <button
      className="flex justify-between items-center p-3 gap-2  rounded-full text-sm font-light uppercase"
      style={{
        color,
        backgroundColor,
      }}
    >
      <span className="sm:hidden ">{icon}</span>
      <span className="hidden sm:block">{text}</span>
    </button>
  );
};

export default Button;
