import React, { useState, useEffect } from "react";

const CryptoTicker = () => {
  const [tickers, setTickers] = useState([]);
  const [resData, setResData] = useState('Nothing yet');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch ticker data
  const fetchTickers = async () => {
    // const apiUrl = "https://api.crypto.com/v2/public/get-ticker";
    const apiUrl = "https://api.crypto.com/v1/symbols";

    try {
      setLoading(true);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.code !== 0) {
        throw new Error(`API error: ${data.message}`);
      }

      setTickers(data.result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchTickers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Crypto.com Trading Pairs</h2>

      {/* Loading Spinner */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Table to Display Tickers */}
      {!loading && !error && tickers.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Symbol</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Last Price</th>
            </tr>
          </thead>
          <tbody>
            {tickers.map((ticker) => (
              <tr key={ticker.i}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{ticker.i}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{ticker.a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p>Response Data: {resData}</p>
    </div>
  );
};

export default CryptoTicker;
