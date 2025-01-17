import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import SignleCart from "./SignleCart";
import { Link } from "react-router-dom";

const cartData = [
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

const Cart = ({ setCartOpen }) => {

  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
   
      setCartOpen(false);
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
                onClick={() => setCartOpen(false)}
              />
            </div>
           {cartData && cartData.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
          <h2 className="pt-3 flex place-items-center  font-semibold text-[20px]">
           <IoBagHandleOutline size={23} className="mr-3"/>
          {cartData?.length} Items</h2>
          
          {cartData && cartData.map((res)=>{
            return(
             
          <div className="w-full border-t">  
           <SignleCart data={res} /> </div>
            )
          })}
           
            </div>
             <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now ($1080)
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
        </div>
    </div>
  );
};

export default Cart;
