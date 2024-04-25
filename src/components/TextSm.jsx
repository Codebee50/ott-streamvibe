const TextSm = (props) => {
  const classes = "w-[90%] font-manrope text-gray60 text-sm font-normal" + props.className;

  return (
    <p className={classes}>
      {props.text}
    </p>
  );
};

export default TextSm;
