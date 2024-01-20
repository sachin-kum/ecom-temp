import React, { useEffect, useRef } from 'react'
import { RxCross1 } from 'react-icons/rx'
import SignleWishList from './SignleWishList';
import { IoBagHandleOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';

const wishData = [
{
name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
description: "test",
price: 999, 
quantity:1
},
{
name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
description: "test",
price: 245,
quantity:1
},
{
name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
description: "test",
price: 645,

quantity:2
}
]

const WishList = ({setWishListOpen}) => {

  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
   
      setWishListOpen(false);
    }
  };
    useEffect(() => {

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); // Empt

  return (
    <div className="text-4xl  fixed left-0 w-full bg-[#0000004b] h-screen z-10 top-0 right-0 ">
        <div ref={modalRef}  className="fixed top-0 right-0 h-full w-[80%] lg:w-[25%] bg-white  flex flex-col  overflow-y-scroll justify-between shadow-sm p-5">
        <div className="text-end pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setWishListOpen(false)}
              />
            </div>

              {wishData && wishData.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
          <h2 className="pt-3 flex place-items-center  font-semibold text-[20px]">
           <AiOutlineHeart  size={23} className="mr-3" />
          {wishData?.length} Items</h2>
          
          {wishData && wishData.map((res)=>{
            return(
             
          <div className="w-full border-t">  
           <SignleWishList data={res} /> </div>
            )
          })}
           
            </div>
           
          </>
        )}
        </div>
        </div>
  )
}

export default WishList