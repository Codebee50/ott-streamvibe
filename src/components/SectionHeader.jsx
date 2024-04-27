import TextL from "./TextL";
import TextSm from "./TextSm";

const SectionHeader = (props) => {
  const classes = "lg:max-w-[80%] " + props.className
  return (
    <div className={classes}>
      <TextL text={props.largeText} />
      <TextSm
        className="mt-2"
        text={props.smallText}
      />
    </div>
  );
};

export default SectionHeader;
