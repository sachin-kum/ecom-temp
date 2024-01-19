import React from "react";
import { useNavigate } from "react-router-dom";

const Dropwon = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (res) => {
    navigate(`/products?category=${res.title}`);
    setDropDown(false);
    //  window.location.reload();
  };
  return (
    <>
      <div className=" bg-white rounded-md border-t-2 shadow-sm w-[270px]  absolute z-30">
        {categoriesData &&
          categoriesData.map((res, index) => {
            return (
              <div
                key={index}
                className="flex mt-2 place-items-center cursor-pointer"
                onClick={() => submitHandle(res)}
              >
                <img
                  src={res?.image_Url}
                  className="w-[40px] h-[40px] mr-[10px]"
                />
                <p>{res?.title}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dropwon;
