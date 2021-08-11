import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Books from './Books';
import './BestBooks.css';


class MyFavoriteBooks extends React.Component {
    constructor(props){
      super(props)
      this.state={
        book:[],
      }
    }

     renderBooks=async()=>{
      const{user}=this.props.auth0;
      console.log(user);
      try{
        let url=`http://localhost:3001/book?email=${user.email}`;
        

        let data= await axios.get(url);
        this.setState({
          book:data.data
        })
        console.log(data.data);
      }
      catch(error){
        if(error.response && error.response.data)
        console.log('error');
      }
    } 

    componentDidMount=()=>{
      this.renderBooks();
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
        <Books arr={this.state.book}/>
     

      </>}
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);









// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import { withAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// import Books from './Books'
// import './BestBooks.css';


// class MyFavoriteBooks extends React.Component {
//     constructor(props){
//       super(props)
//       this.state={
//         book:[],
//       }
//     }

//      renderBooks=async()=>{
//       const{user}=this.props.auth0;
//       console.log(user);
//       try{
//         let url=`http://localhost:3001/book?email=${user.email}`;
        

//         let data= await axios.get(url);
//         this.setState({
//           book:data.data
//         })
//       }
//       catch(error){
//         if(error.response && error.response.data)
//         console.log('error');
//       }
//     } 

//     componentDidMount=()=>{
//       this.renderBooks();
//     }



//   render() {


//     const {  isAuthenticated } = this.props.auth0;
    
//     console.log(this.props.auth0);
//     return(
//       <Jumbotron>

// { isAuthenticated && 
//            <> 
//         <h1>My Favorite Books</h1>
//         <p>
          
//           This is a collection of my favorite books
//         </p>
//         <Books arr={this.state.book}/>
     

//       </>}
//       </Jumbotron>
//     )
//   }
// }

// export default withAuth0(MyFavoriteBooks);
