const BgBlackStrokeCard = (props) => {
  return (
    <div className="py-2 px-3 border border-strokeBlack bg-black08 w-max rounded-md">
      {props.children}
    </div>
  );
};

export default BgBlackStrokeCard;
