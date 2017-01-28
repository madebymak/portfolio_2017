import React, { Component } from 'react';
import './Gallery.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';

class Gallery extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
      };
      this.showModal1 = this.showModal1.bind(this);
      this.showModal2 = this.showModal2.bind(this);
      this.showModal3 = this.showModal3.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

  showModal1() {
    this.setState({showModal1: true});
  }

  showModal2() {
    this.setState({showModal2: true});
  }

  showModal3() {
    this.setState({showModal3: true});
  }

  hideModal() {
    this.setState({
      showModal1: false,
      showModal2: false,
      showModal3: false
    });
  }

  render() {

    const close = (
      <Button className="closebtn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
    )

    return (
      <Grid className="brd">
        <Row className="brd">

          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal1}>
            <Image src="http://placehold.it/500x300" alt="alt" responsive/>
            <Modal dialogClassName="modal-dialog" backdrop="static" show={this.state.showModal1}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Project #1</h2>
                <Image className="full-img" src="http://placehold.it/500x300" alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </Modal.Body>
            </Modal>
          </Col>

          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal2}>
            <Image src="http://placehold.it/500x300" alt="alt" responsive/>
            <Modal dialogClassName="modal-dialog" show={this.state.showModal2}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body>
                <h2>Project #2</h2>
                <Image className="full-img" src="http://placehold.it/500x300" alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </Modal.Body>
            </Modal>
          </Col>

          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal3}>
            <Image src="http://placehold.it/500x300" alt="alt" responsive/>
            <Modal dialogClassName="modal-dialog" show={this.state.showModal3}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body>
                <h2>Project #3</h2>
                <Image className="full-img" src="http://placehold.it/500x300" alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </Modal.Body>
            </Modal>
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Gallery;
