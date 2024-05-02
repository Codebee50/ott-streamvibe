const DetailCard = (props) => {
  const classes = "w-full bg-black10 px-7 py-7 rounded-xl " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default DetailCard;
