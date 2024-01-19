import React from "react";
import Countdown from "react-countdown";
import CountDown from "./CountDown";
const EventCard = () => {
  return (
    <>
      <div>
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" />
      </div>
      <div className="px-5 lg:px-0 m-auto">
        <h1 className="text-[25px] font-[600]  text-[#333]">
          Iphone 14 pro max 8/256gb
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          ducimus eum similique corporis dolor molestias labore accusantium sed
          accusamus illo voluptate aut reprehenderit sit reiciendis blanditiis
          doloribus quos cupiditate corrupti. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit, ducimus eum similique corporis
          dolor molestias labore accusantium sed accusamus illo voluptate aut
          reprehenderit sit reiciendis blanditiis doloribus quos cupiditate
          corrupti.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] ">999$</h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 Sold
          </span>
        </div>
        <CountDown />
      </div>
    </>
  );
};

export default EventCard;
