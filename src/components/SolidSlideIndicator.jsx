const SolidSlideIndicator = (props) => {
  const classes =
    "h-[5px] solid-indicator transition-all ease-linear duration-100 " +
    props.className;
  return (
    <progress className={classes} value={props.value} max="100"></progress>
  );
};

export default SolidSlideIndicator;
