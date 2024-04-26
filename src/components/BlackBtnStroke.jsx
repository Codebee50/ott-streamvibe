const BlackBtnStroke = (props) => {
    const classes = "font-manrope bg-black08 text-white py-[0.9rem] px-5 flex shrink-0 rounded-md text-sm text-nowrap border-[2px] border-strokeBlack " + props.className
  return (
    <button className={classes}>
        {props.text}
    </button>  )
}

export default BlackBtnStroke