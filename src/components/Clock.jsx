import { useState, useEffect } from "react";

function Clock() {
  let [time, setTime] = useState();
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();

      const hour = String(date.getHours()).padStart(2, 0);
      const minutes = String(date.getMinutes()).padStart(2, 0);
      const seconds = String(date.getSeconds()).padStart(2, 0);
      setTime(`${hour}:${minutes}:${seconds}`);
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{time}</p>;
}
export default Clock;
