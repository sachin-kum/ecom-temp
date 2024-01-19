import React, { useEffect, useState } from "react";

const CountDown = () => {
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [miniutes, setMiniutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [timeRem, setTimeRem] = useState();

  // const finish_date = new Date("Jan 18, 2024 00:20:00 ");

  // const getTime = () => {
  //   const time = finish_date.getTime() - Date.now();
  //   setTimeRem(time);
  //   if (time > 0) {
  //     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //     setMiniutes(Math.floor((time / (1000 * 60)) % 60));
  //     setSeconds(Math.floor((time / 1000) % 60));
  //   }
  // };

  // useEffect(() => {
  //   const Intervel = setInterval(() => getTime(finish_date), 1000);
  //   return () => clearInterval(Intervel);
  // }, [seconds]);

  const [timeRem, setTimeRem] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/18/2024 12:29:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      setHours(h);

      const m = Math.floor((difference / (1000 * 60)) % 60);
      setMinutes(m);

      const s = Math.floor((difference / 1000) % 60);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeRem(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!timeRem ? (
        <span className="text-[25px] text-[#475ad2]">
          {days < 10 ? "0" + days : days} <span className="mr-2">Days</span>
          {hours < 10 ? "0" + hours : hours} <span className="mr-2">Hours</span>
          {minutes < 10 ? "0" + minutes : minutes}{" "}
          <span className="mr-2">Minutes</span>
          {seconds < 10 ? "0" + seconds : seconds} <span>Seconds</span>
        </span>
      ) : (
        <p className="text-red-500 text-2xl"> Times Up !</p>
      )}
    </div>
  );
};

export default CountDown;
