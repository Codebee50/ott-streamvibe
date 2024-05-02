import TextSmVariant from "./TextSmVariant";

const DetailHeading = (props) => {
  return (
    <div className="flex flex-row items-center gap-1">
      {props.icon && <props.icon color="#999999" />}
      <TextSmVariant text={props.text} />
    </div>
  );
};

export default DetailHeading;
