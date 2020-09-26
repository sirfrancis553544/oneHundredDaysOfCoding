import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "Mojombo",
    avatar_url:
      "https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/810/f/6-facial-recognition-hero.jpg",
    html_url: "https://github.com/mojombo",
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
