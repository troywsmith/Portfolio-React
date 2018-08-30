import React, { Component } from "react";
import "../style.css";

class Projects extends Component {

  render() {
    return (

      <div class="skills">

        <div class="card">
          <div class="cardheader">
            <h4>HTML</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <div class="descriptiondiv">
              <div class="skill">
                <img class="skillpic" alt="#" src="https://cnet1.cbsistatic.com/img/Y9ee_x9iC5HfhohDUq8Dk8m9QYY=/770x433/2011/01/18/6ee1f979-f0f7-11e2-8c7c-d4ae52e62bcc/HTML5_Logo_550px.png" />
                <p>HTML5</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://react-etc.net/files/2017-12/react-hexagon.png" />
                <p>JSX</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://scotch.io/wp-content/uploads/2014/07/nodejs-templating-with-ejs.jpg" />
                <p>EJS</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://img08.deviantart.net/aed0/i/2012/172/5/0/html5_canvas_logo_by_netgoblin154-d54alet.png" />
                <p>Canvas</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardheader">
            <h4>CSS</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <div class="descriptiondiv">
              <div class="skill">
                <img class="skillpic" alt="#" src="https://www.shareicon.net/download/2016/08/01/639873_internet.svg" />
                <p>CSS3</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardheader">
            <h4>JavaScript</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <div class="descriptiondiv">
              <div class="skill">
                <img class="skillpic" alt="#" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" />
                <p>JavaScript</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
                <p>Node</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" />
                <p>React</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://i.pinimg.com/originals/34/20/e5/3420e571b3d7a4a348d8fad91e3bfda4.png" />
                <p>jQuery</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardheader">
            <h4>Back-End</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <div class="descriptiondiv">
              <div class="skill">
                  <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png" />
                  <p>Python</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png" />
                <p>Ruby</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png" />
                <p>Rails</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardheader">
            <h4>Other</h4>
          </div>
          <hr />
          <div class="cardcontent">
            <div class="descriptiondiv">
              <div class="skill">
                <img class="skillpic" alt="#" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                <p>GitHub</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://agileleague.com/wp-content/uploads/2012/09/heroku-logo-light3.png" />
                <p>Heroku</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://www.bbhub.io/mobile/sites/2/2014/05/media_app_icon.png" />
                <p>Bloomberg</p>
              </div>
              <div class="skill">
                <img class="skillpic" alt="#" src="https://www.crypteo.io/wp-content/uploads/2017/11/blockchain-crypteo.png" />
                <p>Blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
