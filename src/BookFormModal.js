

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class Footer extends React.Component {
  render() {
    return(
      <>
        
  <br />
  <Form onSubmit= {(event) => this.props.addBook(event)}>
  <Form.Control type="text" placeholder="Add Title"  name= "title"/>
  <br />
  <Form.Control size="sm" type="text" placeholder="Status" name="status" />
<br/>
  <Form.Control size="lg" type="text" placeholder="Add Description" name= 'description' />
  <br />
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
      </>
    );
  }
}

export default Footer;
