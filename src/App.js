import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ActivationPage,
  BestSellingpage,
  Eventpage,
  FAQPage,
  HomePage,
  LoginPage,
  ProductPage,
  SignupPage,
} from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadUser } from "./redux/actions/userAction";
import Store from "./redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Header from "./components/layout/Header";

function App() {
  const token = Cookies.get("token");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(LoadUser(token));
    }
  }, [token]);
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/best-selling" element={<BestSellingpage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/faq" element={<FAQPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
