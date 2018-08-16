import React, { Component } from "react";
import "../style.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    }
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    fetch("https://api.github.com/users/troywsmith/repos")
      .then(response => response.json())
      .then(data => this.setState({details: data}))
      .catch(err => {
        console.log(err);
      });
    console.log("fetch working for Projects");
  }

  render() {
    return (
      <div className="section" className="projects">

      {this.state.details.map( project => {
        {console.log(project.name)}
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

        <div className="card">
          <div className="cardheader">
            <img src="https://lol.garena.com/playnow/arcade2016/images/locale/en_US/logo.png" />
            <h4> Troy 's Arcade</h4>
          </div>
          <hr />
          <div className="cardcontent">
            <ul className="description">
              <li>
                <a href="https://troywsmith.github.io/Arcade/"> Live App </a>
              </li>
              <li>
                <a href="https://github.com/troywsmith/GA-Project-1">
                  
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
