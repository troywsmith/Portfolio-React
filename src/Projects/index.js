import React, { Component } from "react";
import "../style.css";

class Projects extends Component {

  render() {
    return (

      <div class="section" class="projects">

        <div class="card">
            <div class="cardheader">
              <img src="http://images.clipartpanda.com/camping-tent-clipart-black-and-white-orange-tent-hi.png" />
              <h4>Tripify</h4>
            </div>
            <hr />
            <div class="cardcontent">
              <ul class="description">
                <li>
                  <a href="https://tripifyy.herokuapp.com/">Live App</a>
                </li>
                <li>
                  <a href="https://github.com/troywsmith/Tripify">GitHub Repo</a>
                </li>
              </ul>
            </div>
          </div>

        <div class="card">
          <div class="cardheader">
            <img src="http://www.localseowebdesign.com/image/cache/catalog/Image%20Swap%20Service-480x480.png" />
            <h4>Swap.</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <ul class="description">
              <li>
                <a href="https://swaptokens.herokuapp.com/">Live App</a>
              </li>
              <li>
                <a href="https://github.com/troywsmith/GA-Project-2">GitHub Repo</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="cardheader">
            <img src="https://lol.garena.com/playnow/arcade2016/images/locale/en_US/logo.png" />
            <h4>Troy's Arcade</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <ul class="description">
              <li>
                <a href="https://troywsmith.github.io/Arcade/">Live App</a>
              </li>
              <li>
                <a href="https://github.com/troywsmith/GA-Project-1">GitHub Repo</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

    )
  }
}

export default Projects;
