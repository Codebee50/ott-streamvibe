
const IconButton = (props) => {
  return (
    <button className="flex flex-row items-center bg-red45 p-3 rounded-lg gap-3">
      <props.icon color="white" size={"1.3em"} />
      <p className="font-manrope text-white text-sm">{props.text}</p>
    </button>
  );
};

export default IconButton;
