import React, { Component } from "react";
import "./About.css";

class TabSelector extends Component {
  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="who"
          onClick={this.props.handleChangeTab}
          className={activeId === "who" ? "active" : ""}
        >
          Who we are
        </button>

        <button
          id="where"
          onClick={this.props.handleChangeTab}
          className={activeId === "where" ? "active" : ""}
        >
          Where we are
        </button>

        {/* <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={activeId === "contact" ? "active" : ""}
        >
          Contact Us
        </button> */}
      </div>
    );
  }
}

export default TabSelector;
