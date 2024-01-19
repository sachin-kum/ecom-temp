import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import styles from "../styles/style";
import ProductCard from "../components/route/product-card/ProductCard";
import Footer from "../components/layout/Footer";
import { productData } from "../static/data";

function BestSellingpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = productData?.sort((a, b) => b.total_sell - a.total_sell);
    setData(sortedData);
  }, [productData]);
  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BestSellingpage;
