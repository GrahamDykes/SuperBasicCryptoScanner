// import React, { useState, useEffect } from "react";

// const fetch = require('node-fetch'); // Ensure you have node-fetch installed: npm install node-fetch





//---------------------------FUNCTIONING--------------------------------------
// const CryptoTicker = () => {
//   const [tickers, setTickers] = useState([]);
//   const [resData, setResData] = useState('Nothing yet');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  // Function to fetch ticker data
//   const fetchTickers = async () => {
//     const apiUrl = "https://api.crypto.com/v1/symbols";         //gets all symbols
//     // const apiUrl = "https://api.crypto.com/v1/ticker";       //gets all symbols


//     try {
//       setLoading(true);
//       const response = await fetch(apiUrl);
//     //   const response = await fetch(apiUrl,{

//     //     symbol: 'BTCUSDT' // Replace with desired symbol
    
//     //   });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//     //   if (data.code !== 0) {
//     //     throw new Error(`API error: ${data.message}`);
//     //   }
// console.log("DATA.data:\n", data.data)
//       setTickers(data.data);
//     } catch (err) {
//         console.log("error:",err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchTickers();
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2>Crypto.com Trading Pairs</h2>

//       {/* Loading Spinner */}
//       {loading && <p>Loading...</p>}

//       {/* Error Message */}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {/* Table to Display Tickers */}
//       {!loading && !error && tickers.length > 0 && (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Symbol</th>
//               <th style={{ border: "1px solid #ddd", padding: "8px" }}>Last Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickers.map((ticker) => (
//               <tr key={ticker.i}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{ticker.symbol}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{ticker.a}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <p>Response Data: {resData}</p>
//     </div>
//   );
// };

// export default CryptoTicker;

//------------------------------------------------------------------------------------











//  GPT to get symbol & price

// const fetch = require('node-fetch'); // Ensure you have node-fetch installed: npm install node-fetch

// async function fetchSymbolsAndPrices() {
//     const url = "https://api.crypto.com/v2/public/get-ticker";

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.code === 0) { // Ensure the API call is successful
//             const tickers = data.result.data;
//             const symbolsAndPrices = tickers.map(ticker => ({
//                 symbol: ticker.i,
//                 price: ticker.a
//             }));

//             console.log(symbolsAndPrices);
//         } else {
//             console.error("API Error:", data.message);
//         }
//     } catch (error) {
//         console.error("Failed to fetch symbols and prices:", error);
//     }
// }

// fetchSymbolsAndPrices();



import React, { useEffect, useState } from "react";

const CryptoPricesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSymbolsAndPrices = async () => {
            // const url = "https://api.crypto.com/v2/public/get-ticker";
            const url = "/v2/public/get-ticker"
            
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                if (result.code === 0) {
                    const tickers = result.result.data;
                    const symbolsAndPrices = tickers.map(ticker => ({
                        symbol: ticker.i,
                        price: ticker.a,
                    }));
                    setData(symbolsAndPrices);
                } else {
                    throw new Error(result.message || "Failed to fetch data.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSymbolsAndPrices();
    }, []);

    return (
        <div>
            <h1>Crypto Prices</h1>
            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.symbol}</td>
                                <td>{parseFloat(item.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CryptoPricesTable;
