import BlackBtnStroke from "./BlackBtnStroke"
import RedButton from "./RedButton"

const PlanCard = (props) => {
  return (
    <div className="bg-black10 flex flex-col p-10 rounded-lg min-h-[270px]">
        <p className="text-white font-manrope font-bold text-[1rem]">{props.name}</p>
        <p className="mt-3 text-gray60 font-manrope text-[0.9rem]">{props.description}</p>

        <div className="mt-10 flex flex-row items-end gap-1">
            <p className="font-manrope text-3xl text-white font-semibold">{`$${props.monthPrice}`}</p>
            <p className="font-manrope text-gray60">/{props.term}</p>
        </div>

        <div className="mt-7 flex flex-row gap-3 flex-wrap">
            <BlackBtnStroke text={"Start Free Trial"}/>
            <RedButton text={'Choose Plan'} className={'px-9'} />
        </div>

    </div>
  )
}

export default PlanCard