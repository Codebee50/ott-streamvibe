const BlackCardStroke = (props) => {
  return (
    <div className=" bg-black10 text-white p-2 flex shrink-0 rounded-md border-[1px] border-strokeBlack cursor-pointer" onClick={props.onClick}>
      <props.icon color="white" size={"1.3em"}/>
    </div>
  );
};

export default BlackCardStroke;
