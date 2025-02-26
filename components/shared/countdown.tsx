"use client";
import { useState, useEffect } from "react";

export default function CountDown({ providedTargetDate }) {
  const targetDate = new Date(providedTargetDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 text-white text-2xl md:text-4xl font-bold mt-6">
      <div className="border-t-4 border-l-2 border-r-2 border-red-600 p-2 md:p-3 rounded-lg">
        <div className="grid justify-center">{timeLeft.days}</div>
        <div className="text-sm md:text-xl text-red-100 rounded-sm p-1 px-2">Days</div>
      </div>
      <div className="border-t-4 border-l-2 border-r-2 border-red-600 p-2 md:p-3 rounded-lg">
        <div className="grid justify-center">{timeLeft.hours}</div>
        <div className="text-sm md:text-xl text-red-100 rounded-sm p-1">Hours</div>
      </div>
      <div className="border-t-4 border-l-2 border-r-2 border-red-600 p-2 md:p-3 rounded-lg">
        <div className="grid justify-center">{timeLeft.minutes}</div>
        <div className="text-sm md:text-xl text-red-100 rounded-sm p-1 px-2">Mins</div>
      </div>
      <div className="border-t-4 border-l-2 border-r-2 border-red-600 p-2 md:p-3 rounded-lg">
        <div className="grid justify-center">{timeLeft.seconds}</div>
        <div className="text-sm md:text-xl text-red-100 rounded-sm p-1 px-2">Secs</div>
      </div>
    </div>
  );
}