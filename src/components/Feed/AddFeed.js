import React from "react";
import "./Feed.css";

class AddFeed extends React.Component {
  state = {
    name: "",
    location: "",
    image: "",
    comment: "",
    online: true,
    rating: "",
  };

  handlePost = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={(event) => this.props.addFeedFunction(event, this.state)}>
        <div className="user-inputs">
          <label for="input-fields">
            <input
              className="input"
              name="name"
              type="text"
              required="required"
              placeholder="your name"
              onChange={this.handlePost}
            />
            <input
              className="input"
              name="location"
              type="text"
              required="required"
              placeholder="your city/country"
              onChange={this.handlePost}
            />
            <input
              className="input"
              name="image"
              type="text"
              required="required"
              placeholder="paste here the url of the pic"
              onChange={this.handlePost}
            />
            <input
              className="input"
              name="comment"
              type="text"
              required="required"
              placeholder="speak with the community"
              onChange={this.handlePost}
            />

            <select
              name="rating"
              className="input"
              defaultValue="Rate Us"
              onChange={this.handlePost}
            >
              <option disabled value="Rate Us">
                Rate Us
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <button type="submit" className="btn-feed">
            Add your post!
          </button>
        </div>
      </form>
    );
  }
}

export default AddFeed;
