import React, { Component } from "react";
import "./style.css";

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    fetch("https://api.github.com/users/troywsmith/repos")
      .then(response => response.json())
      .then(data => this.setState({projects: data}))
      .catch(err => { console.log(err)});
  }
  

  render() {


    const crypicoPopover = (
      <Popover id="popover-trigger-hover-focus" title="Crypico">
        Freelance cryptocurrency marketplace
      </Popover>
    );
    const marketbarkerPopover = (
      <Popover id="popover-trigger-hover-focus" title="MarketBarker">
        Cryptocurrency news blog
      </Popover>
    );
    const swapPopover = (
      <Popover id="popover-trigger-hover-focus" title="Swap.">
        Cryptocurrency exchange platform powered by SWAP tokens
      </Popover>
    );
    const tripifyPopover = (
      <Popover id="popover-trigger-hover-focus" title="Tripify">
        App to help friends get prepared for an outing
      </Popover>
    );


    return (
      <div className="section" className="projects">
      
        <h2> Highlighted Projects </h2>
        <div className="highlighted-projects">
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={crypicoPopover}
          >
            <a href="https://crypico.com/">
              <img className="project-pic" src="https://www.ryanmahaffey.com/static/crypicosquare.9d8294b7.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={marketbarkerPopover}
          >
            <a href="https://marketbarker.com/">
              <img className="project-pic" src="https://www.ryanmahaffey.com/static/SquareMBLogo.136780e6.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={swapPopover}
          >
            <a href="https://swaptokens.herokuapp.com/"> 
              <img className="project-pic" src="http://www.localseowebdesign.com/image/cache/catalog/Image%20Swap%20Service-480x480.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={tripifyPopover}
          >
            <a href="https://tripifyy.herokuapp.com/">
              <img className="project-pic" src="http://images.clipartpanda.com/camping-tent-clipart-black-and-white-orange-tent-hi.png" />
            </a>
          </OverlayTrigger>
        </div>


        <h2> Other Work </h2>
        {this.state.projects.map( project => {
          return ( 
          <div className="card" key={project.id}>
            <div className="cardheader">
              <h3>
                <a href={project.html_url}>{project.name}</a>
              </h3>
            </div>
            <hr />
            <div>
              <div className="project-details">
                <p> Description: {project.description} </p>
                <p> Most used language: {project.language} </p>
                <p> Last update: {project.updated_at} </p>
                {project.homepage ?
                <a href={project.homepage}>Live App</a>
                : null
                }
              </div>
            </div>
          </div>
          )
          })}

      </div>
    );
  }
}

export default Projects;
