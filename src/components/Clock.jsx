import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState({
    milli: 0,
    sec: 0,
    min: 0,
    hou: 0,
    mo: 0,
    dy: 0,
    yr: 0
  });

  const pad = (number, n) => {
    let r = number.toString();
    while (r.length < n) {
      r = '0' + r;
    }
    return r;
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        sec: now.getSeconds(),
        min: now.getMinutes(),
        hou: now.getHours(),
        mo: months[now.getMonth()],
        dy: now.getDate(),
        yr: now.getFullYear()
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div id="timedate">
         <a>{time.yr}</a><br />
        <a>{time.mo}</a>
        <a>{time.dy}</a><br />
        <a>{pad(time.hou, 2)}</a>:
        <a>{pad(time.min, 2)}</a>:
        <a>{pad(time.sec, 2)}</a>
      </div>
    </div>
  )
}

export default Clock;
