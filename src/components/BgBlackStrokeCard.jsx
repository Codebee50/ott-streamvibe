const BgBlackStrokeCard = (props) => {
  const classes =
    `py-2 px-3 border border-strokeBlack bg-black08 ${props.full?'w-full': 'w-max'} rounded-md ` +
    props.className;
  return <div className={classes}>{props.children}</div>;
};

export default BgBlackStrokeCard;
