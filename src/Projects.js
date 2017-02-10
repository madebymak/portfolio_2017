import React, { Component } from 'react';
import './About.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import Gallery from './Gallery.js';

class Projects extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        showModal: false,
      };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }

  open() {
    this.setState({showModal: true});
  };

  close() {
    this.setState({showModal: false});
  };

  render() {

    const bio = (
      <Modal className="box right" show={this.state.showModal}>
        <Modal.Header>
          <Button className="close-btn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
        </Modal.Header>
        <Modal.Body>
          {/* <h2>Recent Projects</h2> */}
          <i className="fa fa-github fa-5x" aria-hidden="true"></i>
          <a href="https://github.com/madebymak" target="blank">
          <h2> www.github.com/madebymak</h2></a>
          {/* <Gallery/> */}
        </Modal.Body>
      </Modal>
    )

    return (
      <div className="greet" id="greet">
        <div className="about-menu" onClick={this.open}>
          <div className="brd" id="bio-text">
            <h2>Click here to see some of my recent projects.</h2>
          </div>
        </div>
        {bio}
      </div>
    );
  }
}

export default Projects;
