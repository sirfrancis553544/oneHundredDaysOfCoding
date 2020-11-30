import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./styles.css";
import "../App.css";
import "../coin.css";
import Coins from "../coin";
export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      numberOfCoins: 50,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData() {
    let coin = 300;
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coin}&page=1&sparkline=false`
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.numberOfCoins
        );

        const postData = slice.map((coin) => (
          <>
            <React.Fragment>
              <tbody>
                <tr key={coin.id}>
                  <td className="coin">
                    {coin.market_cap_rank}{" "}
                    <img src={coin.image} alt="" width="20" height="20" />
                    {coin.name}{" "}
                  </td>
                  <td className="coin-symbol">{coin.symbol}</td>
                  <td className="coin-price">${coin.current_price}</td>
                  <td className="coin-volume"> ${coin.total_volume}</td>
                  {coin.price_change_percentage_24h < 0 ? (
                    <td className="coin-percent red">
                      {coin.price_change_percentage_24h.toFixed(2)}%%
                    </td>
                  ) : (
                    <td className="coin-percent green">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}
                  <td className="coin-marketcap"> ${coin.market_cap}</td>
                </tr>
              </tbody>
            </React.Fragment>
          </>
        ));

        this.setState({
          pageCount: Math.ceil(data.length / this.state.numberOfCoins),

          postData,
        });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.numberOfCoins;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      <div>
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

        
        

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {/* <th>Coin Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Range</th>
                <th>Market Cap</th> */}
              </tr>
            </thead>
            <tbody>
            {this.state.postData}
            </tbody>
          </table>
          
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
