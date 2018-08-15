import React, { Component } from "react";
import "../style.css";

//Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

//components

class TabBar extends Component {

  render() {
    return (
      <div className="page">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="tabs">
          <Tab eventKey={1} title="About" className="tab">
            <p> I am a data analyst turned software engineer. My background in data analytics and business intelligence has taught me to be organized and thorough, and to persevere in intense situations, while my positive demeanor and zeal help give focus to and energize the people around me. </p>
          </Tab>
          <Tab eventKey={2} title="Experience" className="tab">
            My Experience
          </Tab>
          <Tab eventKey={3} title="Projects" className="tab">
            My Projects
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TabBar;
