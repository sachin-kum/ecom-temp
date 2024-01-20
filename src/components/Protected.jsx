import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoadUser } from "../redux/actions/userAction";

const Protected = (props) => {
  const token = Cookies.get("token");
  const { Component } = props;
  const dispatch = useDispatch();
  console.log("sachin");
  useEffect(() => {
    if (token) {
      dispatch(LoadUser(token));
    }
  }, [token]);
  return <Component />;
};

export default Protected;
