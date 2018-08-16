import React, { Component } from "react";
import "./style.css";
import Typing from "react-typing-animation";

class Projects extends Component {
  render() {
    return (
      <div className="about">
        <div>
          <Typing speed={20}>
            <div className="welcome-message">
              <h2>Hello, my name is Troy Smith.</h2>
              <br />
              <Typing.Delay ms={1000} />
              <h3>
                I am a Data Analyst turned Software Engineer. 
              </h3>
              <h3>
                Check out my past expriences and projects on the tabs above.
              </h3>
              <h3>
                Contact me at 
                <a hred="mailto:troy@troywsmith.com"> troy@troywsmith.com </a> !!
              </h3>
            </div>
          </Typing>
          <hr />
          <div className="cardcontent">
            <div className="socialmediawidgets">
              <a href="https://www.linkedin.com/in/troy-w-smith/">
                <img
                  title="GitHub"
                  alt="LinkedIn"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png"
                  width="35"
                  height="35"
                />
              </a>
              <a href="https://github.com/troywsmith/">
                <img
                  title="Pinterest"
                  alt="GitHub"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  width="35"
                  height="35"
                />
              </a>
              <a href="https://www.facebook.com/TroySmith24">
                <img
                  title="Facebook"
                  alt="Facebook"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png"
                  width="35"
                  height="35"
                />
              </a>
              <a href="https://www.instagram.com/_troysmith_/?hl=en">
                <img
                  title="Instagram"
                  alt="RSS"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png"
                  width="35"
                  height="35"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
