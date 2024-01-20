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
import Protected from "./components/Protected";
import Protected2 from "./components/Protected2";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Protected Component={HomePage} />} />
          <Route
            path="/events"
            element={<Protected2 Component={Eventpage} />}
          />
          {/* <Route path="/events" element={<Eventpage />} /> */}
          <Route
            path="/products"
            element={<Protected Component={ProductPage} />}
          />
          <Route
            path="/best-selling"
            element={<Protected Component={BestSellingpage} />}
          />
          <Route path="/faq" element={<FAQPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
