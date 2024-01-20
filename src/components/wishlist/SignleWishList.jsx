import React, { useState } from 'react'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { BsCartPlus } from "react-icons/bs";

const SignleWishList = ({data}) => {
    const[value,setValue]=useState(data.quantity)
const totalPrice=data.price * value
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
       <div>
          <RxCross1
          size={16}
          className="cursor-pointer"
        //   onClick={() => removeFromCartHandler(data)}
        />
        </div> 
        <img
          src={`https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png`}
          alt=""
          className="w-[70px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <p className='text-[16px] leading-6'>{data.name}</p>
          
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] leading-6">
            ${totalPrice}
          </h4>
        </div>
             <div>
          <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
        //    onClick={() => addToCartHandler(data)
        //    }
          />
        </div>
       
      </div>
    </div>
  )
}

export default SignleWishList