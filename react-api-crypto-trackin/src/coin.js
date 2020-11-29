import React from "react";
import "./coin.css"

const coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  rank
}) => {
  return (
    <div className="coin-container"> 
      
          <div className="coin-row">
             
        <div className="coin">
        <h2>{rank}</h2>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          
        </div>
        <p className="coin-symbol">{symbol}</p>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {/* <p className="coin-percent red">{priceChange}%</p> */}
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
          <p className="coin-marketcap">
           ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default coin;

