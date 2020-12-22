import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import TabSelector from "./Tabselector";
import Where from "./Where";
import Who from "./Who";
import Contact from "./Contact";
import "./About.css";

class About extends Component {
  state = {
    activeId: "",
  };

  handleChangeTab = (event) => {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  };

  getTabContent() {
    switch (this.state.activeId) {
      case "who":
        this.state = true;
        return <Who />;
      case "where":
        this.state = true;
        return <Where />;
      case "contact":
        this.state = true;
        return <Contact />;
    }
  }

  render() {
    return (
      <div className="About">
        <NavBar />
        <div className="img-container-about">
          <div className="background-container">
            <h1 className="header-message-about">
              {" "}
              We truly believe that beauty doesn't need to have any cruelty
              envolved. By supporting 100% cruelty-free businesses, you are
              contributing to a better world, where animals are not being
              tested! We salute you!
            </h1>
          </div>
        </div>

        <h1 className="team">Click to find more about us!</h1>

        <div className="tab">
          <TabSelector
            handleChangeTab={this.handleChangeTab}
            activeId={this.state.activeId}
          />
          <div className="tab-content">{this.getTabContent()}</div>
        </div>
      </div>
    );
  }
}

export default About;
