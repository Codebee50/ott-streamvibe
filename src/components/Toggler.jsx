const Toggler = (props) => {
  return (
    <div className="bg-black06 px-2 py-4 rounded-[0.9rem] border-[2px] border-black10 w-max">
            <ul className="flex flex-row items-center gap-3 ">
                {
                    props.options.map((option)=>(
                        <li key={option}><a className={`font-manrope text-gray60 text-[0.9rem] p-3 rounded-[0.5rem] cursor-pointer ${props.selected=== option && 'bg-black10 text-white'}`}>{option}</a></li>
                    ))
                }
            </ul>
        </div>
  )
}

export default Toggler