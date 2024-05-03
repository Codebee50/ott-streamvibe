const RoundBgIcon = (props) => {
  return (
    <div
      className={`w-[44px] h-[44px] rounded-full flex bg-black08 border border-strokeBlack cursor-pointer shrink-0 ${props.className}`}
      onClick={props.onClick}
    >
      <props.icon
        className={`m-auto fill-gray60 ${props.loading && "spinner"}`}
      />
    </div>
  );
};

export default RoundBgIcon;
