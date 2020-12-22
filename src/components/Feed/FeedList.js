import React from "react";
import Feed from "./Feed";
import NavBar from "../NavBar/NavBar";
import AddFeed from "./AddFeed";
import Search from "./Search";
import Footer from "../Footer/Footer";

class FeedList extends React.Component {
  state = {
    feeds: [
      {
        id: 1,
        name: "Sandra Azevedo",
        location: "Covilhã",
        image:
          "https://images.pexels.com/photos/1171039/pexels-photo-1171039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "This blush from ELS is amazing! I highly recommend it, Beauty without the beast",
        online: false,
        rating: 8,
      },
      {
        id: 2,
        name: "Lara F.",
        location: "Paris",
        image:
          "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        comment:
          "This website saved my life. Bought vegan makeup to all my friend. They loved it! Go green!",
        online: true,
        rating: "",
      },
      {
        id: 3,
        name: "Emma Frey",
        location: "Bristol",
        image:
          "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "Had my first makeover with 100% cruelty free products! Cannot tell the difference.",
        online: true,
        rating: 10,
      },
      {
        id: 4,
        name: "Paulo Rocha",
        location: "Lisbon",
        image:
          "https://images.pexels.com/photos/5727902/pexels-photo-5727902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "My girlfriend is Vegan, so thank you so much for making my search easier. She loved the makeup!",
        online: false,
        rating: "",
      },
      {
        id: 5,
        name: "Maria M.",
        location: "Luanda",
        image:
          "https://images.pexels.com/photos/4349857/pexels-photo-4349857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        comment:
          "My colleagues asked me today what foundation I was using. They compliment me several times today!",
        online: true,
        rating: 8,
      },
      {
        id: 6,
        name: "Luana S.",
        location: "Chicago",
        image:
          "https://images.pexels.com/photos/2468492/pexels-photo-2468492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "Yesterday was my W-Day! Everything was amazing (AND VEGAN)! My beautiful makeup was searched in this website!",
        online: false,
        rating: "",
      },
      {
        id: 7,
        name: "Francesca Diomi",
        location: "Milan",
        image:
          "https://images.pexels.com/photos/2066039/pexels-photo-2066039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "Never thought I liked so much the makeup from these brands. The quality is great! This is my makeup for today!",
        online: false,
        rating: 9,
      },
      {
        id: 8,
        name: "Marcia S.",
        location: "Porto",
        image:
          "https://images.pexels.com/photos/1619488/pexels-photo-1619488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        comment:
          "I find that the library is too narrow. I don't like the brands on it...",
        online: false,
        rating: 2,
      },

      {
        id: 9,
        name: "Gabi A.",
        location: "São Paulo",
        image:
          "https://images.pexels.com/photos/3892675/pexels-photo-3892675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        comment:
          "Does it's job... Nothing special. Good for the environment, though.",
        online: true,
        rating: 5,
      },
    ],
    sort: "",
    areOnlyRankedFeedsDisplayed: false,
    areOnlyOnlineDisplayed: false,
  };

  addFeed = (event, newFeed) => {
    event.preventDefault();
    this.setState({ feeds: [newFeed, ...this.state.feeds] });
  };

  handleSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  handleRankedFeeds = () => {
    this.setState({
      areOnlyRankedFeedsDisplayed: !this.state.areOnlyRankedFeedsDisplayed,
    });
  };

  handleOnlineFeeds = () => {
    this.setState({
      areOnlyOnlineDisplayed: !this.state.areOnlyOnlineDisplayed,
    });
  };

  render() {
    const sortedFeeds = this.state.feeds.sort((a, b) => {
      if (this.state.sort === "Higher Rating") {
        return b.rating - a.rating;
      } else if (this.state.sort === "Lowest Rating") {
        return a.rating - b.rating;
      }
    });
    return (
      <div>
        <NavBar />
        <div className="img-container-feed">
          <div className="background-container">
            <h1 className="header-message-feed">
              {" "}
              Share here your thoughts and experiences with your VeganMakeUp
            </h1>
          </div>
        </div>
        <AddFeed addFeedFunction={this.addFeed} />
        <Search handleSort={this.handleSort} />
        <div className="user-inputs">
          <button className="button-rank" onClick={this.handleRankedFeeds}>
            {this.state.areOnlyRankedFeedsDisplayed
              ? "Display All Posts"
              : "Display only ranked Posts"}
          </button>

          <button className="button-rank" onClick={this.handleOnlineFeeds}>
            {this.state.areOnlyOnlineDisplayed
              ? "Display All Posts"
              : "Display only Online Users Posts"}
          </button>
        </div>
        <div className="container">
          {this.state.feeds
            .filter((feed) =>
              this.state.areOnlyRankedFeedsDisplayed ? feed.rating !== "" : feed
            )
            .filter((feed) =>
              this.state.areOnlyOnlineDisplayed ? feed.online === true : feed
            )
            .map((feed) => (
              <Feed {...feed} key={feed.id} />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default FeedList;
