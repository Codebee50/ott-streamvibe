const RedButton = (props) => {
  return (
    <button className="font-manrope bg-red45 text-white py-4 px-5 flex shrink-0 rounded-md text-sm text-nowrap">
        {props.text}
    </button>
  )
}

export default RedButton