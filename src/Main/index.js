import React, { Component } from "react";
import "../style.css";

//Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

//components
import Skills from '../Skills';
import About from '../About';
import Projects from '../Projects';

class TabBar extends Component {

  render() {
    return (
      <div className="page">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="tabs">
          <Tab eventKey={1} title="About" className="tab">
            <About />
          </Tab>
          <Tab eventKey={2} title="Skills" className="tab">
            <Skills />
          </Tab>
          <Tab eventKey={3} title="Projects" className="tab">
            <Projects />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TabBar;
