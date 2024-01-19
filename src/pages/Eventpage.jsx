import React from "react";
import Events from "../components/events/Events";
import styles from "../styles/style";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Eventpage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <Events active={false} />
        <Events active={false} />
        <Events active={false} />
      </div>
      <Footer />
    </div>
  );
};

export default Eventpage;
