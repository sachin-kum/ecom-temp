import React, { useEffect, useState } from "react";
import styles from "../styles/style";
import { productData } from "../static/data";
import Header from "../components/layout/Header";
import ProductCard from "../components/route/product-card/ProductCard";
import Footer from "../components/layout/Footer";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const { searchParams } = useSearchParams();
  //   const categoryData = searchParams?.get("category");
  const queryParameters = new URLSearchParams(window.location.search);
  const categoryData = queryParameters.get("category");
  const categoryData1 = queryParameters.get("name");
  console.log(categoryData, categoryData1);

  useEffect(() => {
    if (categoryData === null && categoryData1 === null) {
      console.log("hey,");
      const d = productData;
      setData(d);
    } else {
      const dta =
        productData &&
        productData.filter(
          (i) => i.category === categoryData || i.name === categoryData1
        );

      setData(dta);
      window.scrollTo(0, 0);
    }
  }, [categoryData, categoryData1]);
  //   console.log("productData", productData);
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        {data.length ? (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        ) : (
          <>
            <h2 className="font-extrabold grid place-items-center min-h-[300px] text-3xl">
              No Product Found
            </h2>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
