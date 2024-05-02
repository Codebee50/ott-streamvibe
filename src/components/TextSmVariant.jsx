const TextSmVariant = (props) => {
  const classes = "text-gray60 font-manrope " + props.className;
  return <p className={classes}>{props.text}</p>;
};

export default TextSmVariant;
