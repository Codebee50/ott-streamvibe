import line from '../assets/images/line.svg'
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

import { useLayoutEffect } from 'react';
import { useRef } from 'react';

const FaqItem = (props) => {
    const answerContainer = useRef()

    useLayoutEffect(()=>{
        if(props.open){
            answerContainer.current.style.height = `${answerContainer.current.scrollHeight}px`
        }
        else{
            answerContainer.current.style.height = '0'
        }
    })

    // console.log(props.open)
    const faqClickHandler = ()=>{
        props.onOpenFaq(props.index)
    }
  return (
    <div className={`flex flex-col transition-all ease-in-out duration-300`} onClick={faqClickHandler}>
        <div className={`flex flex-row gap-3 justify-between ${props.open?'':''}`}>
            <div className={`flex flex-row gap-3 ${props.open?'items-start':'items-center'}`}>
                <div className="bg-black12 px-4 py-[0.9rem] rounded-md shrink-0">
                    <p className="text-white font-manrope text-[0.85rem]">0{props.index}</p>
                </div>

                <div className='flex flex-col'>
                    <p className='text-white font-manrope font-medium text-[0.9rem]'>{props.question}</p>
                    <div className={`overflow-y-hidden flex transition-height ease-linear overflow-hidden duration-300 `} ref={answerContainer}>
                        <p className='text-gray60 mt-2 font-manrope text-[0.85rem] leading-6'>{props.answer}</p>
                    </div>
                </div>
            </div>
           

            <div>
                {
                    !props.open?<HiOutlinePlus width={30} height={30} color={'#ffffff'} className='fill-white' />: <HiOutlineMinus width={30} height={30} color={'#ffffff'} className='fill-white' />
                }
            </div>
        </div>

        <img src={line} alt="" className='mt-4'/>
    </div>
  )
}

export default FaqItem