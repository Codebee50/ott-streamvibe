const SolidSlideIndicator = (props) => {
  return (
    <progress className="h-[5px] solid-indicator transition-all ease-linear duration-100" value={props.value} max="100"></progress>
  )
};

export default SolidSlideIndicator;
