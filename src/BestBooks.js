import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './BestBooks.css';


class MyFavoriteBooks extends React.Component {
    constructor(props){
      super(props)
      this.state={
        book:[],
      }
    }



  render() {


    const {  isAuthenticated } = this.props.auth0;
    
    console.log(this.props.auth0);
    return(
      <Jumbotron>

{ isAuthenticated && 
           <> 
        <h1>My Favorite Books</h1>
        <p>
          
          This is a collection of my favorite books
        </p>
        
      </>}
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
