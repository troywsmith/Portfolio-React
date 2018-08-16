import React, { Component } from "react";
import "../style.css";

class Projects extends Component {

  render() {
    return (

    <div className="about">
      <div className="card">
            <div className="cardheader">
              <h4> I am a data analyst turned software engineer. My background in data analytics and business intelligence has taught me to be organized and thorough, and to persevere in intense situations, while my positive demeanor and zeal help give focus to and energize the people around me. </h4>
            </div>
            <hr />
            <div className="cardcontent">
              <div className='socialmediawidgets'>
                <a href="https://www.linkedin.com/in/troy-w-smith/">
                  <img title="GitHub" alt="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" width="35"
                    height="35" />
                </a>
                <a href="https://github.com/troywsmith/">
                  <img title="Pinterest" alt="GitHub" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="35"
                    height="35" />
                </a>
                <a href="https://www.facebook.com/TroySmith24">
                  <img title="Facebook" alt="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" width="35"
                    height="35" />
                </a>
                <a href="https://www.instagram.com/_troysmith_/?hl=en">
                  <img title="Instagram" alt="RSS" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" width="35"
                    height="35" />
                </a>
              </div>
          </div>
        </div>
    </div>

    )
  }
}

export default Projects;
