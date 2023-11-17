import React, { useState, useRef, useEffect } from "react";
import Bar from "../Bar/Bar";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const flashDate = new Date("Dec 20 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const variance = flashDate - now;

      const days = Math.floor(variance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (variance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((variance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((variance % (1000 * 60)) / 1000);

      if (variance < 0) {
        //
        clearInterval(interval.current);
      } else {
        setDays(days),
          setHours(hours),
          setMinutes(minutes),
          setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(()=>{
    startTimer()
    return()=>{
        clearInterval(interval.current)
    }
  })

  return (
    <div>
      <div className="flex justify-start mb-4 items-center gap-2">
        {/* <div className="w-[20px] rounded-md  h-[50px] bg-[#db4444]"></div> */}
        <Bar />
        <p className="text-[#db4444] font-poppins font-semibold">Today's</p>
      </div>
      <div className="flex justify-start gap-12 items-center">
        <p className="font-inter font-semibold text-xl">Flash Sales</p>
        <section className="flex ml-1 flex-col justify-start items-center">
          <p className="font-poppins text-sm">Days</p>
          <p className="font-inter font-semibold">{days}</p>
        </section>
        <span className="text-[#db4444] text-xl font-semibold">:</span>
        <section className="flex ml-1 flex-col justify-start items-center">
          <p className="font-poppins text-sm">Hours</p>
          <p className="font-inter font-semibold">{hours}</p>
        </section>
        <span className="text-[#db4444] text-xl font-semibold">:</span>
        <section className="flex ml-1 flex-col justify-start items-center">
          <p className="font-poppins text-sm">Minutes</p>
          <p className="font-inter font-semibold">{minutes}</p>
        </section>
        <span className="text-[#db4444] text-xl font-semibold">:</span>
        <section className="flex ml-1 flex-col justify-start items-center">
          <p className="font-poppins text-sm">Seconds</p>
          <p className="font-inter font-semibold">{seconds}</p>
        </section>
      </div>
    </div>
  );
};

export default Timer;
