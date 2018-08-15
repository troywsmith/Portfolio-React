import React, { Component } from "react";
import "../style.css";
import { Button, Modal, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap';


//components

class Contact extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div className="contact-button">
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Contact Me
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div class="container">
                <form action="action_page">

                  <label for="fname">First Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                  <label for="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                  <label for="email">Your Email</label>
                  <input type="text" id="email" name="email" placeholder="Your email.." />

                  <label for="subject">Subject</label>
                  <input type="text" className="subject" name="subject" placeholder="Write something.." />

                  <input type="submit" value="Submit" />

                </form>
              </div>

              {/* <div className="contact-section">

                <div className="contact-div">
                  <img className="contact-pic" src="https://cdn1.iconfinder.com/data/icons/e-mail-2/512/YPS__email_mail_letter_envelope_postal-512.png" />
                  <a href="mailto:troy@troywsmith.com">troy@troywsmith.com</a>
                </div>
                
                <div className="contact-div">
                  <img className="contact-pic" src="https://png.icons8.com/metro/1600/linkedin.png" />
                  <a href="linkedin.com/in/troy-w-smith">linkedin.com/in/troy-w-smith</a>
                </div>

                <div className="contact-div">
                  <img className="contact-pic" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                  <a href="github.com/troywsmith">github.com/troywsmith</a>
                </div>

              </div> */}
  
              <hr />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
export default Contact;
