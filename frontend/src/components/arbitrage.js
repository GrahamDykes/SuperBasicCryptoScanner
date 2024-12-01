import React, { useEffect, useState } from "react";

const ArbitragePricesTable = () => {
  const [btcusd, setBtcusd] = useState([]);
  const [ethbtc, setEthbtc] = useState([]);
  const [dogebtc, setDogebtc] = useState([]);
  const [dogeusd, setDogeusd] = useState([]);
  const [filteredPairs, setFilteredpairs] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("http://localhost:5000/arbitrageGet", {
          method: "GET",
        });

        const result = await response.json();

        console.log("RESULTS!\n", result);

        if (!response.ok) {
          throw new Error(`Arbitrage error! status: ${response.status}`);
        }

        setPrices(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      <h1>Arbitrage</h1>
      <ul>
        {prices.map((price) => (
          <li key={price.i}>
            {price.i}: {price.a} (Ask Price) / {price.b} (Bid Price)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArbitragePricesTable;
