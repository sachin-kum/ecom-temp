import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { productData, categoriesData } from "../../static/data";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/style";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import Dropwon from "./Dropwon";
import NavList from "./NavList";
import Cart from "../cart/Cart";
import { CountDown, CountDown2 } from "../events/CountDown";

const Header = ({ activeHeading }) => {
  const navigate = useNavigate();

  const [seacrhItem, setSearchItem] = useState("");
  const [product, setProduct] = useState([]);
  const [isSeller, setIsSeller] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [catData, setCatData] = useState([]);
  const [active, setActive] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchDrop, setSearDrop] = useState(true);

  const seacrhItemChange = (e) => {
    let serach = e.target.value;
    setSearchItem(serach);
    if (seacrhItem == "") {
      return;
    }
    setSearDrop(true);

    const filterBySearch =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(serach.toLowerCase())
      );
    setProduct(filterBySearch);
  };
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 50) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // });

  const submitHandle = (res) => {
    setSearDrop(false);
    navigate(`/products?name=${res.name}`);
  };

  const handleScroll = () => {
    if (window.scrollY >= 51) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="w-11/12 mx-auto ">
        <section className="flex  justify-between my-[20px] h-[50px]">
          <div>
            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" />
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Seacrh Product...."
              value={seacrhItem}
              onChange={seacrhItemChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {seacrhItem && seacrhItem.length !== 0 ? (
              <div
                className={`absolute ${
                  searchDrop ? "min-h-[30vh]" : "none"
                } bg-slate-50 shadow-sm-2 z-[9] p-4 w-full`}
              >
                {product.length ? (
                  product?.map((res, i) => {
                    return (
                      <div key={i}>
                        <div
                          className="w-full flex items-start-py-3"
                          onClick={() => submitHandle(res)}
                        >
                          <img
                            src={`${res.image_Url[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{res.name}</h1>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2 className="text-center mt-4">Product Not Found</h2>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-[150px] bg-black h-[50px]  flex items-center justify-center rounded-xl cursor-pointer">
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </section>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition  800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <section
          className={`${styles.section} relative ${styles.noramlFlex} justify-between `}
        >
          {/* categories */}
          <div className="mt-[10px] w-[270px]">
            <div
              className="relative bg-slate-50 flex mb-0 h-[50px] place-items-center px-2 justify-between rounded-md cursor-pointer"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <BiMenuAltLeft size={30} className="" />
              <button className="text-xl">All Categories</button>
              <IoIosArrowDown />
            </div>
            {dropDown && (
              <Dropwon
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>

          {/* Nav Items */}

          <div className={`${styles.noramlFlex}`}>
            <NavList active={activeHeading} />
          </div>

          {/* cart ,wishlist,login */}

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                  onClick={() => setCartOpen(true)}
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <NavLink to="login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
      {cartOpen ? <Cart /> : null}
    </>
  );
};

export default Header;
