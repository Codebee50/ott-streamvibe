import TextSmVariant from "../TextSmVariant"

const HeadingAndBody = (props) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <TextSmVariant text={props.headingText}/>
        <p className="text-white font-manrope">{props.contentText}</p>

    </div>
  )
}

export default HeadingAndBody