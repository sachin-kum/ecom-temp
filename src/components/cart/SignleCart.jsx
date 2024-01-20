import React, { useState } from 'react'
import styles from '../../styles/style'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'

const SignleCart = ({data}) => {
const[value,setValue]=useState(data.quantity)
const totalPrice=data.price * value

    // const increment=()=>{

    // }
    // const decrement=()=>{

    // }
    console.log("data",data)
  return (
    <>

    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={` leading-6 bg-[#e44343] border border-[#e4434373] rounded-full w-[25px]  h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
           onClick={() => {setValue(value +1)}}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px] text-[15px] ">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer leading-6"
            onClick={() => {setValue(value ===1  ? 1:value-1)}}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png`}
          alt=""
          className="w-[70px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <p className='text-[16px] leading-6'>{data.name}</p>
          <h4 className="font-[400] text-[15px] text-[#00000082] leading-6">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] leading-6">
            ${totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
        //   onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
   
    </>
  )
}

export default SignleCart