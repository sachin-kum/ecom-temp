import React from "react";
import styles from "../../styles/style";
import EventCard from "./EventCard";

const Events = ({ active }) => {
  return (
    <div>
      <div className={`${styles.section}`}>
        {active ? (
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>
        ) : (
          ""
        )}

        <div className="grid  bg-white grid-cols-1 lg:grid-cols-2">
          <EventCard />

          {/* <h4>{allEvents?.length === 0 && "No Events have!"}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
