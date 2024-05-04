const InputGrid = (props) => {
  return (
    <div className="w-full grid grid-cols-1 min-[460px]:grid-cols-2 gap-8 min-[460px]:gap-3">
      {props.children}
    </div>
  );
};

export default InputGrid;
