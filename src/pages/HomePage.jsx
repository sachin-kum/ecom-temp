import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Hero from "../components/route/hero/Hero";
import Categories from "../components/route/categories/Categories";
import BestDeal from "../components/route/best-deal/BestDeal";
import FeaturedProducts from "../components/route/featured-product/FeaturedProducts";
import Events from "../components/events/Events";
import Sponsored from "../components/route/sponsored/Sponsored";
import Footer from "../components/layout/Footer";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { LoadUser } from "../redux/actions/userAction";

function HomePage() {
  // const token = Cookies.get("token");

  // const dispatch = useDispatch();
  // console.log("sachin");
  // useEffect(() => {
  //   if (token) {
  //     dispatch(LoadUser(token));
  //   }
  // }, [token]);
  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeal />
      <Events active={true} />
      <FeaturedProducts />
      <Sponsored />
      <Footer />
    </>
  );
}

export default HomePage;
