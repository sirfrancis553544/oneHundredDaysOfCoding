import React, { useState, useEffect } from "react";
import { Content } from "./components/Content";

import styled from "styled-components";

import axios from "axios";
import "./App.css";
import Coin from "./coin";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let numberOfCoins = 50;
    let pageNumber = 1;
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberOfCoins}&page=${pageNumber}&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <Container>
        <Content />
      </Container>

      <div className="coin-search">
        <h1 className="coin-text">100 Top Crypto Currencies</h1>
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            placeholder="search..."
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="coin-container">
        <div className="coin-row">
          <thead>
            <tr>
              <th className="coin">Coin Name</th>
              <th className="coin-symbol">Symbol</th>

              <th className="coin-price">Price</th>
              <th className="coin-volume">Volume</th>
              <th className="coin-percent">Range</th>
              <th className="coin-marketcap">Market Cap</th>
            </tr>
          </thead>
        </div>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
