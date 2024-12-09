import React, { useEffect, useState } from "react";
import "../Main.css";


//        https://api.crypto.com/v2/public/get-ticker

export default function Cryptoapi() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); // Update state every minute
      setCounter(counter + 1);

    }, 600);

    
    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      {/* <p>Current Time: </p> */}
      <p>Counter {counter}</p>
      {/* <p>Counter </p> */}
    </div>
  );

  //   return (
  //     <div>
  //       <div className="socketTest">
  //         {/* <p>Btc/Usdt: <span id="usdt" className='cryptoPrice' >Loading...</span></p>
  //         <p>Btc/Usdc: <span id="usdc" className='cryptoPrice'>Loading...</span></p>
  //         <p>Zec/Usdt: <span id="zec" className='cryptoPrice'>Loading...</span></p>
  //         <p>Stg/Usdt: <span id="stg" className='cryptoPrice'>Loading...</span></p> */}
  //         <p>I work!</p>

  //       </div>
  //     </div>
  //   );
}
