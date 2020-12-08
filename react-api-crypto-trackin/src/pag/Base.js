import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./styles.css";
import "../App.css";
import "../coin.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      numberOfCoins: 10,
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
              <tbody key={coin.id}>
                <tr>
                  <td className="#" scope="row" data-label="#">{coin.market_cap_rank}</td>
                  <td className="coin-symbol" scope="row" data-label="Logo">
                    <img src={coin.image} alt="" width="20" height="20" />
                  </td>
                  <td className="coin-symbol" scope="row" data-label="Coin">{coin.name}</td>
                  <td className="coin-symbol" scope="row" data-label="Symbol">{coin.symbol}</td>
                  <td className="coin-price" scope="row" data-label="Price">${coin.current_price}</td>
                  <td className="coin-volume" scope="row" data-label="Volume">${coin.total_volume}</td>
                  {coin.price_change_percentage_24h < 0 ? (
                    <td className="coin-percent" scope="row" data-label="Price Down" className="coin-percent red">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="coin-percent" scope="row" data-label="Price Up" className="coin-percent green">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}
                  <td className="coin-marketcap" scope="row" data-label="Market Cap">${coin.market_cap}</td>
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
      <div >
        {/* <span >Statement Summary</span> */}
        <table >
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coin</th>
              <th scope="col">Sym</th>
              <th scope="col">Price</th>
              <th scope="col">Volume</th>
              <th scope="col">Rate</th>
              <th scope="col">Mak. Cap</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr> */}
              <td>{this.state.postData}</td>
            {/* </tr>
          </tbody> */}
        </table>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
