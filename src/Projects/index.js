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
        <strong>Crypico</strong> 
        Check this info.
      </Popover>
    );
    const marketbarkerPopover = (
      <Popover id="popover-trigger-hover-focus" title="MarketBarker">
        <strong>MarketBarker</strong> 
        Check this info.
      </Popover>
    );
    const swapPopover = (
      <Popover id="popover-trigger-hover-focus" title="Swap.">
        <strong>Swap App</strong> 
        Check this info.
      </Popover>
    );
    const tripifyPopover = (
      <Popover id="popover-trigger-hover-focus" title="Tripify">
        <strong>Tripify</strong> 
        Check this info.
      </Popover>
    );


    return (
      <div className="section" className="projects">
      
        <div>
          <h2> Highlighted Projects </h2>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={crypicoPopover}
          >
            <a href="https://crypico.com/">
              <img className="skill-pic" src="https://www.ryanmahaffey.com/static/crypicosquare.9d8294b7.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={marketbarkerPopover}
          >
            <a href="https://marketbarker.com/">
              <img className="skill-pic" src="https://www.ryanmahaffey.com/static/SquareMBLogo.136780e6.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={swapPopover}
          >
            <a href="https://swaptokens.herokuapp.com/"> 
              <img className="skill-pic" src="http://www.localseowebdesign.com/image/cache/catalog/Image%20Swap%20Service-480x480.png" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={tripifyPopover}
          >
            <a href="https://tripifyy.herokuapp.com/">
              <img className="skill-pic" src="http://images.clipartpanda.com/camping-tent-clipart-black-and-white-orange-tent-hi.png" />
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
                <p> {project.description} </p>
                <p> {project.language} </p>
                <p> {project.updated_at} </p>
                {project.homepage ?
                <a href={project.homepage}>Live App</a>
                : null
                }
              </div>
            </div>
          </div>
          )
          })}

        <div className="card">
          <div className="cardheader">
            <img src="http://images.clipartpanda.com/camping-tent-clipart-black-and-white-orange-tent-hi.png" />
            <h4> Tripify </h4>
          </div>
          <hr />
          <div className="cardcontent">
            <ul className="description">
              <li>
                <a href="https://tripifyy.herokuapp.com/"> Live App </a>
              </li>
              <li>
                <a href="https://github.com/troywsmith/Tripify">
                  
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="cardheader">
            <img src="http://www.localseowebdesign.com/image/cache/catalog/Image%20Swap%20Service-480x480.png" />
            <h4> Swap. </h4>
          </div>
          <hr />
          <div className="cardcontent">
            <ul className="description">
              <li>
                <a href="https://swaptokens.herokuapp.com/"> Live App </a>
              </li>
              <li>
                <a href="https://github.com/troywsmith/GA-Project-2">
                  
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
