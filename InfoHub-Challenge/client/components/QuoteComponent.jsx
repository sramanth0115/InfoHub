// src/components/QuoteComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      axios.get("http://localhost:3001/api/quote")
        .then(response => setQuote(response.data))
        .catch(error => console.log("Error fetching quote:", error));
    };

    fetchQuote(); // fetch quote when component loads

    const interval = setInterval(fetchQuote, 5000); // refresh every 5 seconds

    return () => clearInterval(interval); // cleanup when component unmounts
  }, []);

  return (
    <div className="quote_card">
      <h2 className="quote_head">Quote of the Moment</h2>
      {quote ? <p className="quote_para">"{quote.quote}"</p> : <p className="quote_loading">Loading...</p>}
      <p className="quote_author">- {quote ? quote.author : ""}</p>
    </div>
  );
};

export default QuoteComponent;
