import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./styles.css";
import "../App.css"
import "../coin.css"
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
            {/* {coin.market_cap_rank}
            <img src={coin.image} alt="" />
            {coin.name}
            {coin.symbol}
            {coin.market_cap}
            {coin.current_price}
            {coin.price_change_percentage_24h}
            {coin.total_volume} */}
              
            <div className="coin-container"> 
      
      <div className="coin-row">
         
    <div className="coin">
    <h2>{coin.market_cap_rank}</h2>
      <img src={coin.image} alt="crypto" />
      <h1>{coin.name}</h1>
      
    </div>
    <p className="coin-symbol">{coin.symbol}</p>
    <div className="coin-data">
      <p className="coin-price">${coin.current_price}</p>
      <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>
      {/* <p className="coin-percent red">{priceChange}%</p> */}
      {coin.price_change_percentage_24h < 0 ? (
        <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
      ) : (
        <p className="coin-percent green">{coin.price_change_percentage_24h}%</p>
      )}
      <p className="coin-marketcap">
       ${coin.market_cap.toLocaleString()}
      </p>
    </div>
  </div>
</div>
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
        {this.state.postData}
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
