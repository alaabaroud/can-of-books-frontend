import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import Books from './Books'
import './BestBooks.css';

// import Carousel from 'react-bootstrap/Carousel';


import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"


class FavBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: [],
    }
  }

  componentDidMount = () => {

    const { user } = this.props.auth0;
    console.log(user);

    axios.get(`http://localhost:3001/book?email=${user.email}`)

      .then(data => {
        this.setState({
          book: data.data

        })


      })
      .catch(error => (error));
  }

  // componentDidMount=()=>{
  //   this.renderBooks();

  // }



  //   render() {


  //     const {  isAuthenticated } = this.props.auth0;

  //     console.log(this.props.auth0);
  //     return(
  //       <> 
  //       <Jumbotron>



  //         <h1>My Favorite Books</h1>
  //         <p>

  //           This is a collection of my favorite books
  //         </p>


  //          <div>
  //          <CardColumns>{
  //            this.state.book.length &&
  //     this.state.book.map(book=>{

  //   return(
  //         <Card style={{ width: '18rem' }}>
  //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  //         <Card.Body>
  //           <Card.Title>{book.title}</Card.Title>
  //           <Card.Text>
  //           {book.description}
  //           </Card.Text>
  //         </Card.Body>
  //         <ListGroup className="list-group-flush">
  //           <ListGroupItem> {book.status}</ListGroupItem>

  //         </ListGroup>

  //       </Card>
  //   )
  // })
  //   }
  // </CardColumns>

  //          </div>



  //       </Jumbotron>
  //       </>
  //     )
  //   }
  // }

  // export default withAuth0(FavBooks);

  render() {
    // const  {isAuthenticated} = this.props.auth0;
    return (
      <>
        <Jumbotron>


          <div>
            <div>
            </div>
            {
              this.state.book.length &&
              <div>
                {

                  this.state.book.map(book => {

                    <h1>My books! </h1>
                    return (
                      <>


                        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
       <Card.Title>{book.title}</Card.Title>
            <Card.Text>
            {book.description}
           </Card.Text>
          </Card.Body>
      <ListGroup className="list-group-flush">
         <ListGroupItem> {book.status}</ListGroupItem>

        </ListGroup>

        </Card>
                      </>
                    )
                  })
                }
              </div>
            }
          </div>



          {/* {isAuthenticated &&  */}
          <>
            <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p>
          </>
          {/* } */}
        </Jumbotron>
      </>
    )
  }
}

export default withAuth0(FavBooks);