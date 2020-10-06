import React, { useState, useEffect } from "react";

import "../App.css";

function Shop() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [data, setData] = useState([]);

  const fetchItem = async () => {
    const data = await fetch("https://fortnite-api.com/v2/news");
    const items = await data.json();
    console.table(items.data.creative.messages[0]);
    let x = items.data.creative.messages[0];
    setData(x);
  };

  return (
    <div>
      {data.map((item) => (
        <h1>{item.br}</h1>
      ))}
    </div>
  );
}

export default Shop;
