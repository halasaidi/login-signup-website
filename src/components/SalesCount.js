import React, { useState, useEffect } from 'react';
import './sale.css'

function SalesCount() {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });
  const [salesCount, setSalesCount] = useState(0);

  const targetTime = new Date('2023-09-24T16:13:11'); // Replace this with your target time

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDiff = targetTime - currentTime;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    setTimeRemaining({ days, hours, minutes });
  };

  const incrementSalesCount = () => {
    setSalesCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    calculateTimeRemaining();

    const interval = setInterval(() => {
      calculateTimeRemaining();
      incrementSalesCount();
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='count' >
    <h2 >Deal Of The Week</h2>
      <div className='counter d-flex gap-5 text-light ' >
        <div className='d-flex gap-2'>
          <span id='timer' >{timeRemaining.days}</span>
          <span>Days</span>
        </div>
        <div className='d-flex gap-2'>
          <span id='timer' >{timeRemaining.hours}</span>
          <span >Hours</span>
        </div>
        <div className='d-flex gap-2'>
          <span id='timer' >{timeRemaining.minutes}</span>
          <span >Minutes</span>
        </div>
      </div>
      <div className='text-light '>
        <p className='salecount '> {salesCount}</p>
      </div>
<button className='button8'>Shop Now</button>
    </div>
  );
}


export default SalesCount;
