import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "Mojombo",
        avatar_url:
          "https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/810/f/6-facial-recognition-hero.jpg",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "Adam",
        avatar_url:
          "https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/810/f/6-facial-recognition-hero.jpg",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "3",
        login: "Eve",
        avatar_url:
          "https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/810/f/6-facial-recognition-hero.jpg",
        html_url: "https://github.com/mojombo",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
// making grid box 
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;
