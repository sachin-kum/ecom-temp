import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/style";

const Navbar = ({ active, direction, fontMobile, mobileMargin }) => {
  return (
    <div className={`  ${direction} flex`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className={` flex ${mobileMargin}`}>
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#17dd1f]" : " lg:text-[#fff]"
              }  font-[600]   px-6 cursor-pointer} ${fontMobile}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
