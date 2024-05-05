import { useEffect, useState } from "react";

const Countdown = () => {
  const date = new Date("2024-05-10");

  const [countdown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setTime = () => {
    const diff = date.getTime() - Date.now();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    setCountDown({
      days,
      hours,
      minutes,
      seconds,
    });

    // console.log(countdown);
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center gap-5 py-9">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": countdown.days }}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": countdown.hours }}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": countdown.minutes }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": countdown.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
