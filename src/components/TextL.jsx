const TextL = (props) => {
  const classes =
    "text-white font-bold font-manrope text-[1.5rem] breakcon:text-[1.7rem] " +
    props.className;
  return <h1 className={classes}>{props.text}</h1>;
};

export default TextL;
