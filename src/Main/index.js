import React, { Component } from "react";
import "../style.css";

//Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

//components
import Skills from '../Skills';
import About from '../About';
import Projects from '../Projects';

class TabBar extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     skills: [],
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77skuuj7fsupi2&redirect_uri=http://localhost:3000/%2Fauth%2Flinkedin&tate=DCEeFWf45A53sdfKef424&scope=r_basicprofile')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     let skills = data.results.map( (skill) => {
  //       return (
  //         <div key={skill.results}>
  //           <p> {skill.skill} </p>
  //         </div>
  //       )
  //     })
  //     this.setState({skills: skills});
  //     console.log("state", this.state.skills);
  //   })
  // }

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
