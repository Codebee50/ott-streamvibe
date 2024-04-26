const ScreenCard = (props) => {
  return (
    <div className="bg-[#0F0F0F] bg-gradient-to-tr from-transparent from-[60%] to-trans-red rounded-lg flex flex-col p-7">
      <div className="flex flex-row items-center gap-3">
        <img src={props.icon} width={50} alt="" />
        <p className="text-white font-manrope font-semibold">{props.label}</p>
      </div>

      <p className="text-gray60 font-manrope mt-4 text-[0.9rem]">{props.description}</p>
    </div>
  );
};

export default ScreenCard;
