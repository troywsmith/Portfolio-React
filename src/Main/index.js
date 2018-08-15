import React, { Component } from "react";
import "../style.css";

//Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

//components


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
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="tabs">
          <Tab eventKey={1} title="About" className="tab">
            <p> I am a data analyst turned software engineer. My background in data analytics and business intelligence has taught me to be organized and thorough, and to persevere in intense situations, while my positive demeanor and zeal help give focus to and energize the people around me. </p>
          </Tab>
          <Tab eventKey={2} title="Skills" className="tab">
            My Skills
            {/* {this.state.skills} */}
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
