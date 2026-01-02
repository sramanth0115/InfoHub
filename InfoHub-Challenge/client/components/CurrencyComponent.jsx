// src/components/CurrencyComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyComponent = () => {
  const [currency, setCurrency] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/currency?amount=${amount}`)
      .then(response => setCurrency(response.data))
      .catch(error => console.log("Error fetching currency data:", error));
  }, [amount]);

  return (
    <div className="currency_card">
      <h2 className="currency_head">Currency Conversion</h2>
      <input 
        className="currency_input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in INR"
      />
      {currency ? (
        <div>
          <p className="currency_para1">USD: <span className="currency_span"> {currency.usd} </span></p>
          <p className="currency_para1">EUR: ,<span className="currency_span"> {currency.eur} </span> </p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrencyComponent;
