import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Books from './Books';
import './BestBooks.css';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';


class MyFavoriteBooks extends React.Component {
    constructor(props){
      super(props)
      this.state={
        book:[],
        email:'',
        // server: process.env.REACT_APP_SERVER_URL
         showBooks:false

      }
    }

     renderBooks=async()=>{
      const{user}=this.props.auth0;
      // console.log(user.email);
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
    handleModel=()=>{
      this.setState({
        showBooks:!this.state.showBooks
      })
    }
   
     addBook = async (event) => {
      event.preventDefault();

        const title = event.target.title.value;
         const description = event.target.description.value;
         const status = event.target.status.value;
        //  const email = event.target.email.value;

        
         
  
      const bookForm = {

        title:title,
      description:description,
           status:status,
          //  email: this.state.email
           
           
      }
      // console.log(this.state.email);

      // const options = {
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      // };
      // await axios.post('http://localhost:3001/add', JSON.stringify(bookForm), options).catch(console.error);
      // console.log(bookForm);
     
      // let URL=`http://localhost:3001`;
     await  axios({
        method: 'post',
        url: 'http://localhost:3001/add',
        data:  bookForm
        
      })
      // await axios
      // .post(`http://localhost:3001/addbooks`, bookForm)
      .then( data => {

        console.log(data);
        this.setState({
          book : data.data
        })
      })
      .catch(err => {
        console.log(err);
      })
      console.log(event.target.title.value);
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
        <Button onClick={this.handleModel}>
          Add a book

        </Button>
        {this.state.showBooks &&
        <BookFormModal
        show={this.state.showBooks}
        handleClose={this.handleModel}
        addBook={this.addBook}
        />
        }

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
