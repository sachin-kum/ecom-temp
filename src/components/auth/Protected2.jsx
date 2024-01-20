import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Protected2 = (props) => {
  const { Component } = props;
  const token = Cookies.get("token");
  if (!token) {
    return <UserAuth />;
  } else return <Component />;
};

export default Protected2;

const UserAuth = () => {
  return (
    <>
      <Header />
      <div className="h-[70vh] grid place-content-center place-items-center ">
        <h1 className="text-4xl font-extrabold capitalize">
          You are not Authorized please Login
        </h1>

        <div className="mt-5 ml-5  w-[150px] bg-black h-[50px]  flex items-center justify-center rounded-xl cursor-pointer">
          <Link to={`/login`}>
            <h1 className="text-[#fff] flex items-center">
              Login <FaArrowRightLong className="ml-2" />
            </h1>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};
