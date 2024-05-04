const LabelAndInput = (props) => {
  return (
    <div className="flex flex-col">
      <p className="text-white font-manrope font-semibold">{props.label}</p>
      <input
        type="text"
        className="bg-black08 border border-strokeBlack p-4 mt-2 font-manrope text-white placeholder:text-gray60 rounded-md outline-strokeBlack focus:border-strokeBlack "
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default LabelAndInput;
