import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
            
            
            <Form onSubmit={(event) => this.props.addBook(event)}>
              <Form.Label>Add a title</Form.Label>
              <Form.Control type="text" placeholder="Add Title" name="title" />
              <br />
              <Form.Label>Add a Status</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Status"
                name="status"
              />
              <br />
              <Form.Label>Add a description</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Add Description"
                name="description"
              />
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
             
            </Form>
          </Modal.Body>
          <Modal.Footer>
         
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Footer;
