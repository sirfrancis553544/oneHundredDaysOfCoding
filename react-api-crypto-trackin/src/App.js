import React, { useState, useEffect } from "react";
import { Content } from "./darkMode/components/Content";
import { useDarkMode } from "./darkMode/styles/useDarkMode";
import { Toggle } from "./darkMode/components/Toggle";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./darkMode/styles/globalStyle";
import Base from "./pag/Base";
import Apps from "./pagination/Apps";
import ReactPaginate from "react-paginate";
import "./pag/styles.css";

import styled, { ThemeProvider } from "styled-components";

import axios from "axios";
import "./App.css";
// import "./coin.css"
import Coin from "./coin";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    let numberOfCoins = 300;
    let pageNumber = 1;
    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberOfCoins}&page=${pageNumber}&sparkline=false`;

    axios
      .get(BASE_URL)
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // todo add "market_cap_rank": to table
  return (
    <div className="coin-app">
      {/* <Apps /> */}
      {/* <Content /> */}
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />

          {/* <div className="coin-container">
            <div className="coin-row">
            <table>
              <thead>
                <tr>
                  <th className="coin-percent">Range</th>
                  <th className="coin-percent">Logo</th>
                  <th className="coin">Coin Name</th>
                  <th className="coin-symbol">Symbol</th>
                  <th className="coin-price">Price</th>
                  <th className="coin-volume">Volume</th>
                  <th className="coin-marketcap">Market Cap</th>
                </tr>
              </thead>
            <Base />

              </table>
            </div>
          </div> */}

            
            <Base />
        </Container>
      </ThemeProvider>

      {/* todo move search into its own component */}
      {/* <div className="coin-search">
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
      </div> */}

      {/* <div className="coin-container">
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
      </div> */}

      {/* {filteredCoins.map((coin) => {
        return (
          <Coin
            rank={coin.market_cap_rank}
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
      })} */}
    </div>
  );
}

export default App;
