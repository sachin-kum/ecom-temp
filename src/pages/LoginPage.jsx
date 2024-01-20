import React, { useEffect } from "react";
import Login from "../components/login/Login";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const LoginPage = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);
  return <>{!token && <Login />}</>;
};

export default LoginPage;
