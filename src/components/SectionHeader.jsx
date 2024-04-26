import TextL from "./TextL";
import TextSm from "./TextSm";

const SectionHeader = (props) => {
  return (
    <div className="lg:max-w-[80%]">
      <TextL text={props.largeText} />
      <TextSm
        className="mt-2"
        text={props.smallText}
      />
    </div>
  );
};

export default SectionHeader;
